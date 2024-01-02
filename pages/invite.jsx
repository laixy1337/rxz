import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('https://discord.com/api/oauth2/authorize?client_id=1191154780287008858&permissions=8&scope=bot+applications.commands')
    }
    return NextResponse.next()
}
