import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
  return (
    <>
      <Layout>
        <Head>
          <title>Boris Joskic</title>
        </Head>
        <Container>
          <main>
            <h1 className="mb-4">Certificates</h1>

            <Link
              href={
                "https://www.udemy.com/certificate/UC-e0dcdfd6-ed52-40d7-8d3c-ad0a320dbf2a/"
              }
            >
              <Image
                src="/assets/images/udemy-nestjs-cert.jpg"
                width={450}
                height={300}
                alt="NestJS Certificate"
              />
            </Link>
          </main>
        </Container>
      </Layout>
    </>
  );
}
