const flex = (direction?: string, justify?: string, align?: string, gap?: string) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `
}

export default flex