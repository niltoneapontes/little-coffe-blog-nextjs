import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://littlecoffee.cdn.prismic.io/api/v2';

export const client = (req = null) => {
  const options = req ? { req } : undefined;

  return Prismic.client(apiEndpoint, options);
}
