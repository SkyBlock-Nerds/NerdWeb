export function CreateNpcTag(npcName: string, abiphone: boolean = false)
{
    let str = `&e[NPC] ${npcName}&f: `;
    if (abiphone) str += `&b✆ `;
    return str;
}
