# am-pf-nextjs

portfolio

# Spotify Integration – Portfolio API Task

This feature adds a `/spotify` route and related API endpoints to your **Next.js App Router** portfolio website.  
It connects to the **Spotify Web API** to display your top tracks, currently playing song, and followed artists — and lets you control playback directly (play or pause).

---

## Features

- Fetch and display your **Top 10 Spotify tracks**
- Show your **Currently Playing** song
- List **Artists You Follow**
- Control playback: **Play / Pause any song**
- Persistent token storage using **Upstash Redis**
- Secure, server-side OAuth 2.0 flow (Spotify)
- No frontend UI required — returns pretty JSON

---

##  How It Works

1. **Authorize**  
   Visit `/api/spotify/login`.  
   This redirects to Spotify’s OAuth screen → you approve access → redirected to `/api/spotify/callback`.

2. **Token Management**  
   - `access_token` and `refresh_token` are securely handled on the server.  
   - `refresh_token` is persisted in **Upstash Redis** (`spotify:refresh_token` key).  
   - Access tokens are cached with expiry to reduce refresh calls.

3. **Data Fetching**  
   - `/api/spotify` calls Spotify endpoints:
     - `/me/top/tracks?limit=10`
     - `/me/player/currently-playing`
     - `/me/following?type=artist`
   - Combines results into a single JSON response.

4. **Playback Control**  
   - `/api/spotify/play` starts playing any track URI.  
   - `/api/spotify/pause` pauses playback on the active device.

---

## Folder Structure
 - app/spotify/page.tsx # Server-rendered page showing JSON data
 - api/spotify/route.ts # GET - fetch top tracks, now playing, artists
 - login/route.ts # GET - Spotify login
 - callback/route.ts # GET - Spotify callback, stores tokens in Upstash
 - play/route.ts # PUT - play a song
 - pause/route.ts # PUT - pause playback
 - lib/upstash.ts # Upstash REST helper functions
 - lib/spotify.ts # Spotify helper using Upstash for token storage
