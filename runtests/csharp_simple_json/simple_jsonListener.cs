//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.9.3
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from ./runtests/csharp_simple_json/simple_json.g4 by ANTLR 4.9.3

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

namespace simple_json {
using Antlr4.Runtime.Misc;
using IParseTreeListener = Antlr4.Runtime.Tree.IParseTreeListener;
using IToken = Antlr4.Runtime.IToken;

/// <summary>
/// This interface defines a complete listener for a parse tree produced by
/// <see cref="simple_jsonParser"/>.
/// </summary>
[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.9.3")]
[System.CLSCompliant(false)]
public interface Isimple_jsonListener : IParseTreeListener {
	/// <summary>
	/// Enter a parse tree produced by <see cref="simple_jsonParser.start"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterStart([NotNull] simple_jsonParser.StartContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="simple_jsonParser.start"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitStart([NotNull] simple_jsonParser.StartContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="simple_jsonParser.start__y_"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterStart__y_([NotNull] simple_jsonParser.Start__y_Context context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="simple_jsonParser.start__y_"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitStart__y_([NotNull] simple_jsonParser.Start__y_Context context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="simple_jsonParser.jsonpair"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterJsonpair([NotNull] simple_jsonParser.JsonpairContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="simple_jsonParser.jsonpair"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitJsonpair([NotNull] simple_jsonParser.JsonpairContext context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="simple_jsonParser.seplist_o__i__s__i__s_json_p_"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterSeplist_o__i__s__i__s_json_p_([NotNull] simple_jsonParser.Seplist_o__i__s__i__s_json_p_Context context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="simple_jsonParser.seplist_o__i__s__i__s_json_p_"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitSeplist_o__i__s__i__s_json_p_([NotNull] simple_jsonParser.Seplist_o__i__s__i__s_json_p_Context context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="simple_jsonParser.seplist_o__i__s__i__s_jsonpair_p_"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterSeplist_o__i__s__i__s_jsonpair_p_([NotNull] simple_jsonParser.Seplist_o__i__s__i__s_jsonpair_p_Context context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="simple_jsonParser.seplist_o__i__s__i__s_jsonpair_p_"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitSeplist_o__i__s__i__s_jsonpair_p_([NotNull] simple_jsonParser.Seplist_o__i__s__i__s_jsonpair_p_Context context);
	/// <summary>
	/// Enter a parse tree produced by <see cref="simple_jsonParser.json"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void EnterJson([NotNull] simple_jsonParser.JsonContext context);
	/// <summary>
	/// Exit a parse tree produced by <see cref="simple_jsonParser.json"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	void ExitJson([NotNull] simple_jsonParser.JsonContext context);
}
} // namespace simple_json
