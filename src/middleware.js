import { NextResponse } from "next/server";

export async function middleware(req, res) {
  try {
    let authToken = req.cookies.get("token");
    let payload = await verifyToken(authToken.value);

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload.email);
    requestHeaders.set("id", payload.id);
    requestHeaders.set("firstName", payload.firstName);

    return NextResponse.next({ request: { headers: requestHeaders } });
  } catch (error) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", "0");
    requestHeaders.set("id", "0");
    requestHeaders.set("firstName", "0");

    return NextResponse.next({ request: { headers: requestHeaders } });
  }
}
