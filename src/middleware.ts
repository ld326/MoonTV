import { NextRequest, NextResponse } from 'next/server';

// ✅ 彻底关闭密码验证和跳转，放行所有请求
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// ✅ 匹配全部页面（排除静态资源），可保留
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
