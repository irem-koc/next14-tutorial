"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  //client side navigation
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  console.log(pathname);
  const handleClick = () => {
    console.log("clicked");
    router.replace("/");
    // router.refresh()
    // router.back()
    router.forward();
  };
  console.log(query);
  console.log(query.get("q"));
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>redirect</button>
    </div>
  );
};

export default NavigationTestPage;
