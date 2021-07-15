export default class HeadersRepository {

    getHeaderPagesDetails(){
        const headersData = [
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "Donate Food",
                href: "/donatefood",
            },
            {
                label: "Impact",
                href: "/impact",
            },
            {
                label: "Feedback",
                href: "/feedback",
            },
            {
                label: "Volunteer",
                href: "/volunteer",
            },
        ];
        return headersData;
    }    
}
