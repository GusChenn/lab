export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/mega-summarizer",
      permanent: false,
    },
  };
}

export default function Index() {
  return null;
}
