const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 w-full bg-gray-50 text-center p-4">
            <p>©{currentYear} taikicoco</p>
        </footer>
    );
};

export default Footer;
