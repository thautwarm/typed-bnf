import { some, defaultArg } from "../fable_modules/fable-library.3.7.5/Option.js";
import { reverse, length, mapIndexed, ofArray as ofArray_1, cons, fold, toArray, singleton, append as append_1, tail, head, isEmpty, map as map_1, empty } from "../fable_modules/fable-library.3.7.5/List.js";
import { contains, add as add_1, empty as empty_4, ofList, ofArray } from "../fable_modules/fable-library.3.7.5/Set.js";
import { map as map_2, append } from "../fable_modules/fable-library.3.7.5/Array.js";
import { equals, comparePrimitives } from "../fable_modules/fable-library.3.7.5/Util.js";
import { FSharpMap__get_Item, toArray as toArray_1, add, tryFind, empty as empty_1 } from "../fable_modules/fable-library.3.7.5/Map.js";
import { toArray as toArray_2, empty as empty_3, collect, singleton as singleton_1, append as append_2, ofList as ofList_1, map, delay, toList } from "../fable_modules/fable-library.3.7.5/Seq.js";
import { Sigma__GetRecordTypes, Sigma__GetADTCases, Sigma__get_GlobalVariables } from "./Analysis.fs.js";
import { DocBuilder_Builder__For_2B96F4AF, DocBuilder_Builder__ReturnFrom_ZD0BB270, DocBuilder_Builder__Yield_417FD60, DocBuilder_Builder__Combine_Z5C764E00, DocBuilder_runCG, DocBuilder_Builder__Bind_30A200B3, DocBuilder_cg, DocBuilder_Builder__Return_1505, DocBuilder_Builder__Delay_Z3A9C5A06, DocBuilder_Builder__Run_ZD0BB270, NameMangling_mangle, NameMangling_maskChar, NameMangling_IdentifierDescriptor_Create_Z48C5CCEF, NameMangling_nameEnv, NameMangling_IdentifierDescriptor__WithNameEnv_Z7613F24B } from "./Backends.Common.fs.js";
import { escapeString, iToU4, List_tryLookup, escapeStringSingleQuoted, isDigit, isUnicode, isUpper, isLower } from "./Utils.fs.js";
import { TConst_token, lexerule, monot__Prune, $007CTTuple$007C_$007C, symbol } from "./Grammar.fs.js";
import { UnboundNonterminal, UnboundVariable, UnboundLexer, UnsolvedTypeVariable } from "./Exceptions.fs.js";
import { printf, toText, join } from "../fable_modules/fable-library.3.7.5/String.js";
import { bracket, Doc_op_RightShift_2AAA0F3C, align, Doc_op_Multiply_Z7CFFAC00, Doc_op_Addition_Z7CFFAC00, seplist, parens, empty as empty_2, word, vsep } from "../FableSedlex/CodeGen.fs.js";

export const CSharpKeywords = ["__arglist", "__makeref", "__reftype", "__refvalue", "abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char", "checked", "class", "const", "continue", "decimal", "default", "delegate", "do", "double", "else", "enum", "event", "explicit", "extern", "false", "finally", "fixed", "float", "for", "foreach", "goto", "if", "implicit", "in", "int", "interface", "internal", "is", "lock", "long", "namespace", "new", "null", "object", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "ref", "return", "sbyte", "sealed", "short", "sizeof", "stackalloc", "static", "string", "struct", "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort", "using", "virtual", "volatile", "void", "while"];

export function codegen(analyzer, cg_options, langName, stmts) {
    const var_renamer = defaultArg(cg_options.rename_var, (x) => x);
    const rename_ctor = defaultArg(cg_options.rename_ctor, (x_1) => x_1);
    const rename_var = defaultArg(cg_options.rename_var, (x_2) => x_2);
    const rename_field = defaultArg(cg_options.rename_field, (x_3) => x_3);
    const type_renamer = defaultArg(cg_options.rename_type, (x_4) => x_4);
    const typeParameter_mangling = (x_5) => ("_GEN_" + x_5);
    let importVarNames = empty();
    let importTypeNames = empty();
    const abandoned_names = ofArray(append(["result"], CSharpKeywords), {
        Compare: comparePrimitives,
    });
    let symmap = empty_1();
    let toplevel_transformer = empty();
    let currentPos = analyzer.currentPos;
    let lexerMaps = empty();
    const global_scope = toList(delay(() => map((k) => [k[0], var_renamer(k[0])], Sigma__get_GlobalVariables(analyzer.Sigma))));
    const csharpIdentDescr = NameMangling_IdentifierDescriptor__WithNameEnv_Z7613F24B(NameMangling_IdentifierDescriptor_Create_Z48C5CCEF((i, c) => {
        const test = ((isLower(c) ? true : isUpper(c)) ? true : isUnicode(c)) ? true : (c === "_");
        return (i === 0) ? test : (test ? true : isDigit(c));
    }, (i_1, c_1) => (isDigit(c_1) ? (`_X${i_1}_`) : (`_${c_1.charCodeAt(0)}_`))), new NameMangling_nameEnv(ofList(map_1((tuple) => tuple[1], global_scope), {
        Compare: comparePrimitives,
    })));
    const antlrLexerIdentDescr = NameMangling_IdentifierDescriptor__WithNameEnv_Z7613F24B(NameMangling_IdentifierDescriptor_Create_Z48C5CCEF((i_2, c_2) => ((i_2 === 0) ? isUpper(c_2) : ((isUpper(c_2) ? true : (c_2 === "_")) ? true : isDigit(c_2))), (i_3, c_3) => (isLower(c_3) ? c_3.toUpperCase() : ((i_3 === 0) ? (NameMangling_maskChar(65, 90, c_3.charCodeAt(0)) + "_") : (("_" + NameMangling_maskChar(65, 90, c_3.charCodeAt(0))) + "_")))), new NameMangling_nameEnv(ofArray(["EOF"], {
        Compare: comparePrimitives,
    })));
    const antlrGrammarIdentDescr = NameMangling_IdentifierDescriptor__WithNameEnv_Z7613F24B(NameMangling_IdentifierDescriptor_Create_Z48C5CCEF((i_4, c_4) => ((i_4 === 0) ? isLower(c_4) : ((isLower(c_4) ? true : (c_4 === "_")) ? true : isDigit(c_4))), (_arg1, c_5) => (isUpper(c_5) ? c_5.toLowerCase() : (("_" + NameMangling_maskChar(97, 122, c_5.charCodeAt(0))) + "_"))), new NameMangling_nameEnv(ofArray(["start"], {
        Compare: comparePrimitives,
    })));
    const mangle = (idr, n) => NameMangling_mangle(abandoned_names, idr, n);
    const cg_symbol = (x_10) => {
        const matchValue = tryFind(x_10, symmap);
        if (matchValue == null) {
            let valid_py_ident;
            switch (x_10.tag) {
                case 0: {
                    const define = x_10.fields[0];
                    valid_py_ident = (x_10.fields[1] ? escapeStringSingleQuoted(define) : mangle(antlrLexerIdentDescr, define));
                    break;
                }
                case 1: {
                    valid_py_ident = mangle(antlrGrammarIdentDescr, x_10.fields[0]);
                    break;
                }
                default: {
                    throw (new Error("macro not processed"));
                }
            }
            symmap = add(x_10, valid_py_ident, symmap);
            return valid_py_ident;
        }
        else {
            return matchValue;
        }
    };
    const name_of_named_term = (n_2) => cg_symbol(new symbol(0, n_2, false));
    const tryLookup = (key_mut, x_11_mut) => {
        tryLookup:
        while (true) {
            const key = key_mut, x_11 = x_11_mut;
            if (!isEmpty(x_11)) {
                if (equals(head(x_11)[0], key)) {
                    return some(head(x_11)[1]);
                }
                else if (!isEmpty(x_11)) {
                    key_mut = key;
                    x_11_mut = tail(x_11);
                    continue tryLookup;
                }
                else {
                    throw (new Error("Match failure"));
                }
            }
            else {
                return void 0;
            }
            break;
        }
    };
    const _cg_type = (t) => {
        let pattern_matching_result, n_3, a, args, r;
        if (t.tag === 4) {
            pattern_matching_result = 1;
            a = t.fields[0];
        }
        else if (t.tag === 0) {
            pattern_matching_result = 2;
        }
        else if (t.tag === 3) {
            pattern_matching_result = 3;
            args = t.fields[0];
            r = t.fields[1];
        }
        else if (t.tag === 2) {
            if ($007CTTuple$007C_$007C(t.fields[0]) != null) {
                if (isEmpty(t.fields[1])) {
                    pattern_matching_result = 4;
                }
                else {
                    pattern_matching_result = 5;
                }
            }
            else {
                pattern_matching_result = 5;
            }
        }
        else {
            pattern_matching_result = 0;
            n_3 = t.fields[0];
        }
        switch (pattern_matching_result) {
            case 0: {
                return type_renamer(n_3);
            }
            case 1: {
                return typeParameter_mangling(a);
            }
            case 2: {
                const exn = new UnsolvedTypeVariable();
                throw exn;
            }
            case 3: {
                return ("System.Func\u003c" + join(", ", append_1(map_1((tupledArg) => _cg_type(tupledArg[1]), args), singleton(_cg_type(r))))) + "\u003e";
            }
            case 4: {
                throw (new Error("0-element tuple type detected"));
            }
            case 5: {
                let pattern_matching_result_1, args_2;
                if (t.tag === 2) {
                    if ($007CTTuple$007C_$007C(t.fields[0]) != null) {
                        pattern_matching_result_1 = 0;
                        args_2 = t.fields[1];
                    }
                    else {
                        pattern_matching_result_1 = 1;
                    }
                }
                else {
                    pattern_matching_result_1 = 1;
                }
                switch (pattern_matching_result_1) {
                    case 0: {
                        return ("(" + join(", ", map_1(_cg_type, args_2))) + ")";
                    }
                    case 1: {
                        if (t.tag === 2) {
                            const it_2 = join(", ", map_1(_cg_type, t.fields[1]));
                            return ((_cg_type(t.fields[0]) + "\u003c") + it_2) + "\u003e";
                        }
                        else {
                            throw (new Error("Match failure"));
                        }
                    }
                }
            }
        }
    };
    const cg_type = (t_1) => _cg_type(monot__Prune(t_1));
    const slotName = (actionName, i_5) => (`${actionName}__${i_5}`);
    const resultName = "result";
    const mk_lexer = (def) => {
        if (def.tag === 9) {
            return ("(" + mk_lexer(def.fields[0])) + ")";
        }
        else if (def.tag === 5) {
            return `~${mk_lexer(def.fields[0])}`;
        }
        else if (def.tag === 0) {
            return "[0-9]";
        }
        else if (def.tag === 6) {
            return `${mk_lexer(def.fields[0])}+`;
        }
        else if (def.tag === 7) {
            return `${mk_lexer(def.fields[0])}*`;
        }
        else if (def.tag === 1) {
            return ".";
        }
        else if (def.tag === 11) {
            const matchValue_5 = List_tryLookup(def.fields[0], lexerMaps);
            if (matchValue_5 == null) {
                const exn_1 = UnboundLexer(def.fields[0]);
                throw exn_1;
            }
            else {
                return name_of_named_term(def.fields[0]);
            }
        }
        else if (def.tag === 2) {
            return join(" ", toArray(map_1(mk_lexer, def.fields[0])));
        }
        else if (def.tag === 10) {
            return `[${iToU4(def.fields[0])}-${iToU4(def.fields[1])}]`;
        }
        else if (def.tag === 4) {
            if (isEmpty(def.fields[0])) {
                throw (new Error("impossible: alternatives cannot be empty."));
            }
            else {
                return join(" | ", toArray(map_1(mk_lexer, def.fields[0])));
            }
        }
        else if (def.tag === 8) {
            return `${mk_lexer(def.fields[0])}?`;
        }
        else {
            return escapeStringSingleQuoted(def.fields[0]);
        }
    };
    const mk_lexer_debug = (def_6) => {
        const op_Dereference = mk_lexer_debug;
        if (def_6.tag === 9) {
            return op_Dereference(def_6.fields[0]);
        }
        else if (def_6.tag === 5) {
            return `pnot(${op_Dereference(def_6.fields[0])})`;
        }
        else if (def_6.tag === 0) {
            return "pnumber";
        }
        else if (def_6.tag === 6) {
            return `pplus(${op_Dereference(def_6.fields[0])})`;
        }
        else if (def_6.tag === 7) {
            return `pstar(${op_Dereference(def_6.fields[0])})`;
        }
        else if (def_6.tag === 1) {
            return "pany";
        }
        else if (def_6.tag === 11) {
            return def_6.fields[0];
        }
        else if (def_6.tag === 2) {
            const seq = join(", ", ofList_1(map_1(mk_lexer_debug, def_6.fields[0])));
            return `pseq([${seq}])`;
        }
        else if (def_6.tag === 10) {
            return `pinterval(${def_6.fields[0]}, ${def_6.fields[1]})`;
        }
        else if (def_6.tag === 4) {
            if (!isEmpty(def_6.fields[0])) {
                return fold((a_2, b_2) => (`por(${a_2}, ${b_2})`), op_Dereference(head(def_6.fields[0])), map_1(mk_lexer_debug, tail(def_6.fields[0])));
            }
            else {
                throw (new Error("impossible: alternatives cannot be empty."));
            }
        }
        else if (def_6.tag === 8) {
            return `popt${op_Dereference(def_6.fields[0])}`;
        }
        else {
            return `pstring(${escapeString(def_6.fields[0])})`;
        }
    };
    const simplify_lexerule = (x_19) => {
        switch (x_19.tag) {
            case 1:
            case 10:
            case 11:
            case 3: {
                return x_19;
            }
            case 9: {
                return _must_be_atom_rule(x_19.fields[0]);
            }
            case 5: {
                return new lexerule(5, _must_be_atom_rule(x_19.fields[0]));
            }
            case 8: {
                return new lexerule(8, _must_be_atom_rule(x_19.fields[0]));
            }
            case 6: {
                return new lexerule(6, _must_be_atom_rule(x_19.fields[0]));
            }
            case 7: {
                return new lexerule(7, _must_be_atom_rule(x_19.fields[0]));
            }
            case 4: {
                return new lexerule(4, map_1(_must_be_atom_rule, x_19.fields[0]));
            }
            case 2: {
                return new lexerule(2, map_1(_must_be_atom_rule, x_19.fields[0]));
            }
            default: {
                return x_19;
            }
        }
    };
    const _must_be_atom_rule = (x_24_mut) => {
        _must_be_atom_rule:
        while (true) {
            const x_24 = x_24_mut;
            switch (x_24.tag) {
                case 1:
                case 10:
                case 11:
                case 3: {
                    return x_24;
                }
                case 5: {
                    return new lexerule(5, _must_be_atom_rule(x_24.fields[0]));
                }
                case 8: {
                    return new lexerule(8, _must_be_atom_rule(x_24.fields[0]));
                }
                case 6: {
                    return new lexerule(6, _must_be_atom_rule(x_24.fields[0]));
                }
                case 7: {
                    return new lexerule(7, _must_be_atom_rule(x_24.fields[0]));
                }
                case 4: {
                    return new lexerule(9, new lexerule(4, map_1(_must_be_atom_rule, x_24.fields[0])));
                }
                case 2: {
                    return new lexerule(9, new lexerule(2, map_1(_must_be_atom_rule, x_24.fields[0])));
                }
                case 9: {
                    x_24_mut = x_24.fields[0];
                    continue _must_be_atom_rule;
                }
                default: {
                    return x_24;
                }
            }
            break;
        }
    };
    let docCtorWrapFuncs = empty();
    const file_constructors = [(`${langName}.Constructor.`) + ".cs", vsep(toList(delay(() => append_2(singleton_1(word("using Antlr4.Runtime;")), delay(() => append_2(singleton_1(word("using System.Collections.Generic;")), delay(() => append_2(singleton_1(word("using System;")), delay(() => {
        const adtCases = Sigma__GetADTCases(analyzer.Sigma);
        return append_2(singleton_1(empty_2), delay(() => append_2(singleton_1(word(`namespace ${langName}{`)), delay(() => append_2(collect((matchValue_6) => {
            const typename$0027 = type_renamer(matchValue_6[0]);
            return append_2(singleton_1(word(`public partial interface ${typename$0027} {  }`)), delay(() => append_2(collect((matchValue_7) => {
                const ctorName = matchValue_7[0];
                const fields_1 = map_1((tupledArg_2) => [word(rename_field(tupledArg_2[0])), word(cg_type(tupledArg_2[1]))], matchValue_7[1]);
                const ctorName$0027 = rename_ctor(ctorName);
                const func_params = parens(seplist(word(","), toList(delay(() => collect((matchValue_8) => singleton_1(Doc_op_Addition_Z7CFFAC00(matchValue_8[1], matchValue_8[0])), fields_1)))));
                return append_2(singleton_1(Doc_op_Addition_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(word(`public partial record ${ctorName$0027}`), func_params), word(`: ${typename$0027};`))), delay(() => {
                    const ret_t = word(typename$0027);
                    docCtorWrapFuncs = cons(["", rename_ctor(ctorName), ctorName$0027, fields_1, ret_t], docCtorWrapFuncs);
                    return empty_3();
                }));
            }, toArray_1(matchValue_6[1])), delay(() => singleton_1(empty_2)))));
        }, adtCases), delay(() => append_2(collect((matchValue_9) => {
            const typename_1 = matchValue_9[0];
            const shape = matchValue_9[1];
            const typename$0027_1 = type_renamer(typename_1);
            const varname = rename_var(typename_1);
            let patternInput_2;
            if (isEmpty(shape.parameters)) {
                patternInput_2 = ["", word(typename$0027_1)];
            }
            else {
                const tparams_1 = ("\u003c" + join(", ", map_1(typeParameter_mangling, shape.parameters))) + "\u003e";
                patternInput_2 = [tparams_1, word(`${typename$0027_1}<${tparams_1}>`)];
            }
            const tparams_2 = patternInput_2[0];
            const fields_2 = toList(delay(() => collect((matchValue_10) => singleton_1([word(rename_field(matchValue_10[0])), word(cg_type(matchValue_10[1]))]), shape.fields)));
            const func_params_1 = parens(seplist(word(","), toList(delay(() => collect((matchValue_11) => singleton_1(Doc_op_Addition_Z7CFFAC00(matchValue_11[1], matchValue_11[0])), fields_2)))));
            return append_2(singleton_1(Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(word(`public partial record ${typename$0027_1}`), word(tparams_2)), func_params_1), word(";"))), delay(() => {
                docCtorWrapFuncs = cons([tparams_2, varname, typename$0027_1, fields_2, patternInput_2[1]], docCtorWrapFuncs);
                return empty_3();
            }));
        }, Sigma__GetRecordTypes(analyzer.Sigma)), delay(() => singleton_1(word("}"))))))))));
    })))))))))];
    const parensIfLOr = (x_30) => {
        if (x_30.tag === 4) {
            return parens(word(mk_lexer(x_30)));
        }
        else {
            return word(mk_lexer(x_30));
        }
    };
    const matchValue_12 = tryFind("start", analyzer.Omega);
    if (matchValue_12 != null) {
        const start_t = matchValue_12;
        const file_grammar = vsep(ofArray_1(map_2((stmt) => {
            switch (stmt.tag) {
                case 2: {
                    const decl_1 = stmt.fields[0];
                    currentPos = decl_1.pos;
                    lexerMaps = cons([decl_1.lhs, decl_1.define], lexerMaps);
                    return empty_2;
                }
                case 6: {
                    currentPos = stmt.fields[0].pos;
                    return vsep(empty());
                }
                case 4: {
                    currentPos = stmt.fields[0].pos;
                    return vsep(empty());
                }
                case 3: {
                    importVarNames = cons(var_renamer(stmt.fields[0].ident), importVarNames);
                    return vsep(empty());
                }
                case 5: {
                    importTypeNames = cons(type_renamer(stmt.fields[0].ident), importTypeNames);
                    return vsep(empty());
                }
                case 0: {
                    throw (new Error("macro not processed"));
                }
                default: {
                    const decl = stmt.fields[0];
                    currentPos = decl.pos;
                    const lhs = decl.lhs;
                    const ntname_1 = cg_symbol(new symbol(1, lhs));
                    let t_3;
                    const _arg1_1 = new symbol(1, lhs);
                    switch (_arg1_1.tag) {
                        case 0: {
                            t_3 = TConst_token;
                            break;
                        }
                        case 1: {
                            t_3 = FSharpMap__get_Item(analyzer.Omega, _arg1_1.fields[0]);
                            break;
                        }
                        default: {
                            throw (new Error("macro not processed"));
                        }
                    }
                    let idx_1 = 0;
                    const body_3 = align(vsep(mapIndexed((i_10, e_1) => Doc_op_Addition_Z7CFFAC00((i_10 === 0) ? word(":") : word("|"), e_1), toList(delay(() => collect((matchValue_4) => {
                        let prod, actionName_2, patternInput_1, curr_expr, isTerminal, usedSlots, cg_expr, snd, lst_1;
                        let actionName_3;
                        const idx = idx_1 | 0;
                        actionName_3 = toText(printf("%s_%i"))(ntname_1)(idx);
                        currentPos = matchValue_4[0];
                        return append_2(singleton_1((prod = matchValue_4[1], (actionName_2 = actionName_3, (patternInput_1 = ((curr_expr = prod.action, (isTerminal = toArray_2(delay(() => map((sym) => (sym.tag === 0), prod.symbols))), (usedSlots = empty_4({
                            Compare: comparePrimitives,
                        }), (cg_expr = ((scope_1, curr_expr_1) => DocBuilder_Builder__Run_ZD0BB270(DocBuilder_cg, DocBuilder_Builder__Delay_Z3A9C5A06(DocBuilder_cg, () => {
                            let typeArgs, lst, body, anns;
                            const matchValue_1 = curr_expr_1.node;
                            if (matchValue_1.tag === 6) {
                                const matchValue_2 = tryLookup(matchValue_1.fields[0], scope_1);
                                if (matchValue_2 != null) {
                                    const v_1 = matchValue_2;
                                    return DocBuilder_Builder__Return_1505(DocBuilder_cg, (length(matchValue_1.fields[1].contents) === 0) ? word(v_1) : ((typeArgs = ((lst = map_1((arg_1) => word(cg_type(arg_1)), map_1(monot__Prune, matchValue_1.fields[1].contents)), seplist(word(", "), lst))), Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(word(v_1), word("\u003c")), typeArgs), word("\u003e")))));
                                }
                                else {
                                    return DocBuilder_Builder__Return_1505(DocBuilder_cg, (() => {
                                        throw UnboundVariable(matchValue_1.fields[0]);
                                    })());
                                }
                            }
                            else if (matchValue_1.tag === 11) {
                                return matchValue_1.fields[0] ? DocBuilder_Builder__Return_1505(DocBuilder_cg, word("true")) : DocBuilder_Builder__Return_1505(DocBuilder_cg, word("false"));
                            }
                            else if (matchValue_1.tag === 3) {
                                return DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, cg_expr(scope_1, matchValue_1.fields[0]), (_arg6) => DocBuilder_Builder__Return_1505(DocBuilder_cg, Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(_arg6, word(".")), word(matchValue_1.fields[1]))));
                            }
                            else if (matchValue_1.tag === 8) {
                                return DocBuilder_Builder__Return_1505(DocBuilder_cg, word(toText(printf("%d"))(matchValue_1.fields[0])));
                            }
                            else if (matchValue_1.tag === 10) {
                                return DocBuilder_Builder__Return_1505(DocBuilder_cg, word(toText(printf("%f"))(matchValue_1.fields[0])));
                            }
                            else if (matchValue_1.tag === 9) {
                                return DocBuilder_Builder__Return_1505(DocBuilder_cg, word(escapeString(matchValue_1.fields[0])));
                            }
                            else if (matchValue_1.tag === 5) {
                                const patternInput = DocBuilder_runCG(cg_expr(append_1(toList(delay(() => collect((matchValue_3) => {
                                    const arg_2 = matchValue_3[0];
                                    return singleton_1([arg_2, mangle(csharpIdentDescr, arg_2)]);
                                }, matchValue_1.fields[0]))), scope_1), matchValue_1.fields[1]));
                                return DocBuilder_Builder__Return_1505(DocBuilder_cg, (body = vsep(ofArray_1([vsep(patternInput[1]), Doc_op_Addition_Z7CFFAC00(word("return"), Doc_op_Multiply_Z7CFFAC00(patternInput[0], word(";")))])), (anns = map_1((tupledArg_1) => word((cg_type(tupledArg_1[1]) + " ") + tupledArg_1[0]), matchValue_1.fields[0]), parens(vsep(ofArray_1([Doc_op_Multiply_Z7CFFAC00(parens(seplist(word(", "), anns)), word("=\u003e")), Doc_op_RightShift_2AAA0F3C(body, 4)]))))));
                            }
                            else if (matchValue_1.tag === 4) {
                                return DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, cg_expr(scope_1, matchValue_1.fields[1]), (_arg7) => {
                                    const m_name = mangle(csharpIdentDescr, matchValue_1.fields[0]);
                                    return DocBuilder_Builder__Combine_Z5C764E00(DocBuilder_cg, DocBuilder_Builder__Yield_417FD60(DocBuilder_cg, Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word(cg_type(matchValue_1.fields[1].t)), word(m_name)), word("=")), Doc_op_Multiply_Z7CFFAC00(_arg7, word(";")))), DocBuilder_Builder__Delay_Z3A9C5A06(DocBuilder_cg, () => DocBuilder_Builder__ReturnFrom_ZD0BB270(DocBuilder_cg, cg_expr(cons([matchValue_1.fields[0], m_name], scope_1), matchValue_1.fields[2]))));
                                });
                            }
                            else if (matchValue_1.tag === 2) {
                                return DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, DocBuilder_Builder__Run_ZD0BB270(DocBuilder_cg, DocBuilder_Builder__Delay_Z3A9C5A06(DocBuilder_cg, () => DocBuilder_Builder__For_2B96F4AF(DocBuilder_cg, matchValue_1.fields[0], (_arg8) => DocBuilder_Builder__ReturnFrom_ZD0BB270(DocBuilder_cg, cg_expr(scope_1, _arg8))))), (_arg9) => DocBuilder_Builder__Return_1505(DocBuilder_cg, Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word("new"), word(cg_type(curr_expr_1.t))), word("{")), seplist(word(","), _arg9)), word("}"))));
                            }
                            else if (matchValue_1.tag === 7) {
                                const n_5 = slotName(actionName_2, matchValue_1.fields[0]);
                                usedSlots = add_1(matchValue_1.fields[0], usedSlots);
                                const v_2 = word(`_localctx.${n_5}`);
                                return DocBuilder_Builder__Return_1505(DocBuilder_cg, isTerminal[matchValue_1.fields[0] - 1] ? v_2 : Doc_op_Multiply_Z7CFFAC00(v_2, word(".result")));
                            }
                            else {
                                return (matchValue_1.tag === 1) ? DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, DocBuilder_Builder__Run_ZD0BB270(DocBuilder_cg, DocBuilder_Builder__Delay_Z3A9C5A06(DocBuilder_cg, () => DocBuilder_Builder__For_2B96F4AF(DocBuilder_cg, matchValue_1.fields[0], (_arg10) => DocBuilder_Builder__ReturnFrom_ZD0BB270(DocBuilder_cg, cg_expr(scope_1, _arg10))))), (_arg11) => DocBuilder_Builder__Return_1505(DocBuilder_cg, parens(seplist(word(", "), _arg11)))) : DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, cg_expr(scope_1, matchValue_1.fields[0]), (_arg2_1) => DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, DocBuilder_Builder__Run_ZD0BB270(DocBuilder_cg, DocBuilder_Builder__Delay_Z3A9C5A06(DocBuilder_cg, () => DocBuilder_Builder__For_2B96F4AF(DocBuilder_cg, matchValue_1.fields[1], (_arg3) => {
                                    const arg = _arg3;
                                    return DocBuilder_Builder__Bind_30A200B3(DocBuilder_cg, cg_expr(scope_1, arg), (_arg4) => DocBuilder_Builder__Return_1505(DocBuilder_cg, Doc_op_Addition_Z7CFFAC00(parens(word(cg_type(arg.t))), _arg4)));
                                }))), (_arg5) => {
                                    const t_repr = cg_type(curr_expr_1.t);
                                    return DocBuilder_Builder__Return_1505(DocBuilder_cg, Doc_op_Addition_Z7CFFAC00(word(`(${t_repr})`), Doc_op_Multiply_Z7CFFAC00(_arg2_1, parens(seplist(word(", "), _arg5)))));
                                }));
                            }
                        }))), (snd = DocBuilder_runCG(cg_expr(global_scope, curr_expr)), [usedSlots, snd])))))), Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00((lst_1 = mapIndexed((i_8, s_5) => {
                            const i_9 = (i_8 + 1) | 0;
                            const sym_1 = word(cg_symbol(s_5));
                            if (contains(i_9, patternInput_1[0])) {
                                return Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(word(slotName(actionName_2, i_9)), word("=")), sym_1);
                            }
                            else {
                                return sym_1;
                            }
                        }, prod.symbols), seplist(word(" "), lst_1)), word("{")), Doc_op_RightShift_2AAA0F3C(vsep(ofArray_1([empty_2, Doc_op_RightShift_2AAA0F3C(vsep(ofArray_1([vsep(patternInput_1[1][1]), Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word("$" + resultName), word("=")), Doc_op_Multiply_Z7CFFAC00(patternInput_1[1][0], word(";")))])), 4), word("}")])), 12)))))), delay(() => {
                            idx_1 = ((idx_1 + 1) | 0);
                            return empty_3();
                        }));
                    }, decl.define))))));
                    return vsep(ofArray_1([Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word(ntname_1), word("returns")), bracket(Doc_op_Addition_Z7CFFAC00(word(cg_type(t_3)), word(resultName)))), Doc_op_RightShift_2AAA0F3C(body_3, 4), word(";")]));
                }
            }
        }, stmts)));
        const lexerDefs = toList(delay(() => collect((matchValue_13) => {
            const k_1 = matchValue_13[0];
            const v_4 = simplify_lexerule(matchValue_13[1]);
            const n_6 = name_of_named_term(k_1);
            return contains(k_1, analyzer.IgnoreSet) ? singleton_1(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word(n_6), word(":")), parensIfLOr(v_4)), word("-\u003e channel(HIDDEN);"))) : (contains(k_1, analyzer.ReferencedNamedTokens) ? singleton_1(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word(n_6), word(":")), word(mk_lexer(v_4))), word(";"))) : singleton_1(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word("fragment"), word(n_6)), word(":")), parensIfLOr(v_4)), word(";"))));
        }, reverse(lexerMaps))));
        const start_mangled = cg_symbol(new symbol(1, "start"));
        return [[langName + ".g4", vsep(toList(delay(() => append_2(singleton_1(word(`grammar ${langName};`)), delay(() => append_2(singleton_1(word("options { language = CSharp; }")), delay(() => append_2(singleton_1(word("@members {")), delay(() => append_2(collect((matchValue_14) => {
            const ret_t_2 = matchValue_14[4];
            const fields_3 = matchValue_14[3];
            const func_params_2 = parens(seplist(word(","), map_1((tupledArg_3) => Doc_op_Addition_Z7CFFAC00(tupledArg_3[1], tupledArg_3[0]), fields_3)));
            const args_10 = parens(seplist(word(","), map_1((tupledArg_4) => tupledArg_4[0], fields_3)));
            return singleton_1(vsep(toList(delay(() => append_2(singleton_1(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word("public static"), ret_t_2), word(matchValue_14[1])), Doc_op_Multiply_Z7CFFAC00(word(matchValue_14[0]), func_params_2))), delay(() => append_2(singleton_1(word("{")), delay(() => append_2(singleton_1(Doc_op_RightShift_2AAA0F3C(vsep(singleton(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(Doc_op_Addition_Z7CFFAC00(word("return"), parens(ret_t_2)), word("new")), Doc_op_Multiply_Z7CFFAC00(Doc_op_Multiply_Z7CFFAC00(word(matchValue_14[2]), args_10), word(";"))))), 4)), delay(() => singleton_1(word("}"))))))))))));
        }, docCtorWrapFuncs), delay(() => append_2(singleton_1(word("}")), delay(() => {
            let arg10_3;
            return append_2(singleton_1(word((arg10_3 = cg_type(start_t), toText(printf("start returns [%s result]: v=%s EOF { $result = _localctx.v.result; };"))(arg10_3)(start_mangled)))), delay(() => append_2(singleton_1(file_grammar), delay(() => lexerDefs))));
        })))))))))))))], file_constructors];
    }
    else {
        const exn_2 = UnboundNonterminal("start");
        throw exn_2;
    }
}

