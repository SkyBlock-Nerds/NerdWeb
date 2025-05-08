function CodeBox({text}: {
    text: string;
}) {
    return (
        <a className="rounded-4 px-2 py-1 ms-1 tertiary-color text-decoration-none">{text}</a>
    );
}

export default CodeBox;