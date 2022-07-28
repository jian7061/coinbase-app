import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "85u8aihe",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skX9rbnPca80acT0yZbXcMubsJTv9NAhRj9oKMCPcxjbm3G5RkDmTe0JCuo4OOkGfuVo0Pgx9hfrDY8JQAesO5wiCDwvRFbZjRXi2zz96FLpQBmkhwK0gJcxhgwTdczCQCTcIFJmf5JaY66hDx8T0nK4ETeOyzZEGwObKfqyTTqgRiKPxSYi",
  useCdn: false,
});
