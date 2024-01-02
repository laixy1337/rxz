import { redirect } from 'next/navigation';
export default async function Home({ params }) {
    redirect('https://discord.com/api/oauth2/authorize?client_id=1191154780287008858&permissions=8&scope=bot+applications.commands');
}
