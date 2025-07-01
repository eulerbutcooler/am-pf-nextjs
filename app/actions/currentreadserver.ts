interface HardcoverResponse {
  data: {
    me: [
      {
        user_books: [
          {
            book: {
              id: number;
              title: string;
              image: { url: string };
            };
          },
        ];
      },
    ];
  };
  errors?: [{ message: string }];
}

export default async function CurrentReadServer() {
  "use cache";
  const query = `
        query ListCurrentBooks {
          me {
            user_books(
              where: { user_book_status: { status: { _eq: "Currently Reading" } } }
            ) {
              book {
                id
                slug
                title
                image{url}
              }
            }
          }
        }`;
  try {
    const res = await fetch(
      "https://am-pf-nextjs.vercel.app/api/proxy/currentlyreading",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        next: { revalidate: 2592000 },
      },
    );
    const data: HardcoverResponse = await res.json();
    const bookData = data?.data?.me?.[0]?.user_books?.[0]?.book ?? null;
    console.log("Hardcover response", data);
    return bookData;
  } catch (err) {
    console.error(err);
  }
}
