import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import cookie from "cookie";

function UseServerCookies() {
    // Get a cookie from either middleware, pages, or components
    const getCookie = (name: string): string | undefined => {
      const cookieStore = cookies();
      const cookieValue = cookieStore.get(name)?.value;
      return cookieValue;
    };
  
    // Set a cookie on the server
    const setCookie = (res: NextResponse, name: string, value: string, options: cookie.CookieSerializeOptions = {}) => {
      const serializedCookie = cookie.serialize(name, value, {
        httpOnly: true,
        path: '/',
        ...options,
      });
  
      res.headers.append('Set-Cookie', serializedCookie);
    };
  
    return { getCookie, setCookie };
  }

  export default UseServerCookies;