import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Drivemetrics - Admin',
    description: 'Drivemetrics Admin Portal',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'Drivemetrics',
        url: 'https://drivemetrics.com/',
        description: 'Drivemetrics Admin Portal',
        images: [''],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

interface AdminLayoutProps {
    children: React.ReactNode;
}


export default function AdminLayout({ children }: AdminLayoutProps) {
    return <>{children}</>
}