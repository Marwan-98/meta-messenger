import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

type Props = {};

const SignInPage = async (props: Props) => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="rounded-full mx- object-cover mb-10"
          width={400}
          height={400}
          src="/logo.png"
          alt="Profile Picture"
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
