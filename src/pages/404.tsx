import { Box, SmallBox } from "@/components/atoms/box";
import Template from "@/components/atoms/template";
import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-neored-200">
      <Template>
        <div className="flex flex-col items-center gap-5">
          <Box>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl">Page is not found</h1>
              <div className="text-center">
                <Link href={"/"}>
                  <SmallBox>Back to home page</SmallBox>
                </Link>
              </div>
            </div>
          </Box>
        </div>
      </Template>
    </div>
  );
}
