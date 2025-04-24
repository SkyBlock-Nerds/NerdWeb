class HeadRequest {
    skinValue?: string;

    constructor(head: string
    ) {
        this.skinValue = head;
    }
}

export const defaultHeadRequest = new HeadRequest(
    ""
);

export default HeadRequest;