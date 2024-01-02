import redirect from 'next/navigation';
export default function Invite() {
    redirect('https://discord.com/api/oauth2/authorize?client_id=1191154780287008858&permissions=8&scope=bot+applications.commands');
}
