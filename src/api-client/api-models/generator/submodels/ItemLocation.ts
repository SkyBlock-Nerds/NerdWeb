class ItemLocation {
    location1: number;
    location2?: number;

    constructor(location1: number, location2?: number) {
        this.location1 = location1;
        this.location2 = location2;
    }
}

export default ItemLocation;