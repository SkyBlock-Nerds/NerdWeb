class Gemstone {
    name: string;
    icon: string;
    //formattedIcon: string;
    //formattedTiers: Record<string, string>;

    constructor(
        name: string,
        icon: string,
        //formattedIcon: string,
        //formattedTiers: Record<string, string>,
    ) {
        this.name = name;
        this.icon = icon;
        // this.formattedIcon = formattedIcon;
        // this.formattedTiers = formattedTiers;
    }
}

export default Gemstone;