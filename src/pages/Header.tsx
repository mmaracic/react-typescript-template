import { Heading, Section } from "@radix-ui/themes";

function Header() {

    return (
        <Section size="2" >
            <Heading data-testid="header">Test header</Heading>
        </Section>
    );
}

export default Header;