class HeadRequest {
    skinValue?: string;

    constructor(head: string = ""
    ) {
        this.skinValue = head;
    }
}

export default HeadRequest;