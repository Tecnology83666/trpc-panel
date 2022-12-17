import { nodePropertiesFromRef } from "src/parse/utils";
import { ZodLiteralDef } from "zod";
import { LiteralNode, ParseFunction } from "../../../parsed-node-types";

export const parseZodLiteralDef: ParseFunction<ZodLiteralDef, LiteralNode> = (
    def,
    refs
) => {
    return {
        type: "literal",
        value: def.value,
        ...nodePropertiesFromRef(refs),
    };
};
