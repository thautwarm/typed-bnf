//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.11.1
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from ./runtests/csharp_simple_json/simple_json.g4 by ANTLR 4.11.1

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

namespace simple_json {
using System;
using System.IO;
using System.Text;
using System.Diagnostics;
using System.Collections.Generic;
using Antlr4.Runtime;
using Antlr4.Runtime.Atn;
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using DFA = Antlr4.Runtime.Dfa.DFA;

[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.11.1")]
[System.CLSCompliant(false)]
public partial class simple_jsonParser : Parser {
	protected static DFA[] decisionToDFA;
	protected static PredictionContextCache sharedContextCache = new PredictionContextCache();
	public const int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		INT=10, FLOAT=11, STR=12, SPACE=13;
	public const int
		RULE_start = 0, RULE_start__y_ = 1, RULE_jsonpair = 2, RULE_seplist_o__i__s__i__s_json_p_ = 3, 
		RULE_seplist_o__i__s__i__s_jsonpair_p_ = 4, RULE_json = 5;
	public static readonly string[] ruleNames = {
		"start", "start__y_", "jsonpair", "seplist_o__i__s__i__s_json_p_", "seplist_o__i__s__i__s_jsonpair_p_", 
		"json"
	};

	private static readonly string[] _LiteralNames = {
		null, "':'", "','", "'null'", "'['", "']'", "'{'", "'}'", "'true'", "'false'"
	};
	private static readonly string[] _SymbolicNames = {
		null, null, null, null, null, null, null, null, null, null, "INT", "FLOAT", 
		"STR", "SPACE"
	};
	public static readonly IVocabulary DefaultVocabulary = new Vocabulary(_LiteralNames, _SymbolicNames);

	[NotNull]
	public override IVocabulary Vocabulary
	{
		get
		{
			return DefaultVocabulary;
		}
	}

	public override string GrammarFileName { get { return "simple_json.g4"; } }

	public override string[] RuleNames { get { return ruleNames; } }

	public override int[] SerializedAtn { get { return _serializedATN; } }

	static simple_jsonParser() {
		decisionToDFA = new DFA[_ATN.NumberOfDecisions];
		for (int i = 0; i < _ATN.NumberOfDecisions; i++) {
			decisionToDFA[i] = new DFA(_ATN.GetDecisionState(i), i);
		}
	}


	public static NameValuePair<_GEN_A, _GEN_B> NameValuePair <_GEN_A, _GEN_B>(_GEN_A name,_GEN_B value)
	{
	    return (NameValuePair<_GEN_A, _GEN_B>) new NameValuePair<_GEN_A, _GEN_B>(name,value);
	}
	public static JsonValue JStr (string value)
	{
	    return (JsonValue) new JStr(value);
	}
	public static JsonValue JNull ()
	{
	    return (JsonValue) new JNull();
	}
	public static JsonValue JList (MyList<JsonValue> elements)
	{
	    return (JsonValue) new JList(elements);
	}
	public static JsonValue JInt (int value)
	{
	    return (JsonValue) new JInt(value);
	}
	public static JsonValue JFlt (float value)
	{
	    return (JsonValue) new JFlt(value);
	}
	public static JsonValue JDict (MyList<NameValuePair<string, JsonValue>> value)
	{
	    return (JsonValue) new JDict(value);
	}
	public static JsonValue JBool (bool value)
	{
	    return (JsonValue) new JBool(value);
	}

		public simple_jsonParser(ITokenStream input) : this(input, Console.Out, Console.Error) { }

		public simple_jsonParser(ITokenStream input, TextWriter output, TextWriter errorOutput)
		: base(input, output, errorOutput)
	{
		Interpreter = new ParserATNSimulator(this, _ATN, decisionToDFA, sharedContextCache);
	}

	public partial class StartContext : ParserRuleContext {
		public JsonValue result;
		public Start__y_Context v;
		[System.Diagnostics.DebuggerNonUserCode] public ITerminalNode Eof() { return GetToken(simple_jsonParser.Eof, 0); }
		[System.Diagnostics.DebuggerNonUserCode] public Start__y_Context start__y_() {
			return GetRuleContext<Start__y_Context>(0);
		}
		public StartContext(ParserRuleContext parent, int invokingState)
			: base(parent, invokingState)
		{
		}
		public override int RuleIndex { get { return RULE_start; } }
		[System.Diagnostics.DebuggerNonUserCode]
		public override void EnterRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.EnterStart(this);
		}
		[System.Diagnostics.DebuggerNonUserCode]
		public override void ExitRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.ExitStart(this);
		}
	}

	[RuleVersion(0)]
	public StartContext start() {
		StartContext _localctx = new StartContext(Context, State);
		EnterRule(_localctx, 0, RULE_start);
		try {
			EnterOuterAlt(_localctx, 1);
			{
			State = 12;
			_localctx.v = start__y_();
			State = 13;
			Match(Eof);
			 _localctx.result =  _localctx.v.result; 
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			ErrorHandler.ReportError(this, re);
			ErrorHandler.Recover(this, re);
		}
		finally {
			ExitRule();
		}
		return _localctx;
	}

	public partial class Start__y_Context : ParserRuleContext {
		public JsonValue result;
		public JsonContext start__y__0__1;
		[System.Diagnostics.DebuggerNonUserCode] public JsonContext json() {
			return GetRuleContext<JsonContext>(0);
		}
		public Start__y_Context(ParserRuleContext parent, int invokingState)
			: base(parent, invokingState)
		{
		}
		public override int RuleIndex { get { return RULE_start__y_; } }
		[System.Diagnostics.DebuggerNonUserCode]
		public override void EnterRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.EnterStart__y_(this);
		}
		[System.Diagnostics.DebuggerNonUserCode]
		public override void ExitRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.ExitStart__y_(this);
		}
	}

	[RuleVersion(0)]
	public Start__y_Context start__y_() {
		Start__y_Context _localctx = new Start__y_Context(Context, State);
		EnterRule(_localctx, 2, RULE_start__y_);
		try {
			EnterOuterAlt(_localctx, 1);
			{
			State = 16;
			_localctx.start__y__0__1 = json();
			 _localctx.result =  _localctx.start__y__0__1.result;
			            
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			ErrorHandler.ReportError(this, re);
			ErrorHandler.Recover(this, re);
		}
		finally {
			ExitRule();
		}
		return _localctx;
	}

	public partial class JsonpairContext : ParserRuleContext {
		public NameValuePair<string, JsonValue> result;
		public IToken jsonpair_0__1;
		public JsonContext jsonpair_0__3;
		[System.Diagnostics.DebuggerNonUserCode] public ITerminalNode STR() { return GetToken(simple_jsonParser.STR, 0); }
		[System.Diagnostics.DebuggerNonUserCode] public JsonContext json() {
			return GetRuleContext<JsonContext>(0);
		}
		public JsonpairContext(ParserRuleContext parent, int invokingState)
			: base(parent, invokingState)
		{
		}
		public override int RuleIndex { get { return RULE_jsonpair; } }
		[System.Diagnostics.DebuggerNonUserCode]
		public override void EnterRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.EnterJsonpair(this);
		}
		[System.Diagnostics.DebuggerNonUserCode]
		public override void ExitRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.ExitJsonpair(this);
		}
	}

	[RuleVersion(0)]
	public JsonpairContext jsonpair() {
		JsonpairContext _localctx = new JsonpairContext(Context, State);
		EnterRule(_localctx, 4, RULE_jsonpair);
		try {
			EnterOuterAlt(_localctx, 1);
			{
			State = 19;
			_localctx.jsonpair_0__1 = Match(STR);
			State = 20;
			Match(T__0);
			State = 21;
			_localctx.jsonpair_0__3 = json();
			 _localctx.result =  (NameValuePair<string, JsonValue>) NameValuePair<string, JsonValue>((string) (string) unesc((string) (string) getStr((IToken) _localctx.jsonpair_0__1)), (JsonValue) _localctx.jsonpair_0__3.result);
			            
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			ErrorHandler.ReportError(this, re);
			ErrorHandler.Recover(this, re);
		}
		finally {
			ExitRule();
		}
		return _localctx;
	}

	public partial class Seplist_o__i__s__i__s_json_p_Context : ParserRuleContext {
		public MyList<JsonValue> result;
		public Seplist_o__i__s__i__s_json_p_Context seplist_o__i__s__i__s_json_p__1__1;
		public JsonContext seplist_o__i__s__i__s_json_p__0__1;
		public JsonContext seplist_o__i__s__i__s_json_p__1__3;
		[System.Diagnostics.DebuggerNonUserCode] public JsonContext json() {
			return GetRuleContext<JsonContext>(0);
		}
		[System.Diagnostics.DebuggerNonUserCode] public Seplist_o__i__s__i__s_json_p_Context seplist_o__i__s__i__s_json_p_() {
			return GetRuleContext<Seplist_o__i__s__i__s_json_p_Context>(0);
		}
		public Seplist_o__i__s__i__s_json_p_Context(ParserRuleContext parent, int invokingState)
			: base(parent, invokingState)
		{
		}
		public override int RuleIndex { get { return RULE_seplist_o__i__s__i__s_json_p_; } }
		[System.Diagnostics.DebuggerNonUserCode]
		public override void EnterRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.EnterSeplist_o__i__s__i__s_json_p_(this);
		}
		[System.Diagnostics.DebuggerNonUserCode]
		public override void ExitRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.ExitSeplist_o__i__s__i__s_json_p_(this);
		}
	}

	[RuleVersion(0)]
	public Seplist_o__i__s__i__s_json_p_Context seplist_o__i__s__i__s_json_p_() {
		return seplist_o__i__s__i__s_json_p_(0);
	}

	private Seplist_o__i__s__i__s_json_p_Context seplist_o__i__s__i__s_json_p_(int _p) {
		ParserRuleContext _parentctx = Context;
		int _parentState = State;
		Seplist_o__i__s__i__s_json_p_Context _localctx = new Seplist_o__i__s__i__s_json_p_Context(Context, _parentState);
		Seplist_o__i__s__i__s_json_p_Context _prevctx = _localctx;
		int _startState = 6;
		EnterRecursionRule(_localctx, 6, RULE_seplist_o__i__s__i__s_json_p_, _p);
		try {
			int _alt;
			EnterOuterAlt(_localctx, 1);
			{
			{
			State = 25;
			_localctx.seplist_o__i__s__i__s_json_p__0__1 = json();
			 _localctx.result =  new MyList<JsonValue> { _localctx.seplist_o__i__s__i__s_json_p__0__1.result };
			            
			}
			Context.Stop = TokenStream.LT(-1);
			State = 35;
			ErrorHandler.Sync(this);
			_alt = Interpreter.AdaptivePredict(TokenStream,0,Context);
			while ( _alt!=2 && _alt!=global::Antlr4.Runtime.Atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( ParseListeners!=null )
						TriggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Seplist_o__i__s__i__s_json_p_Context(_parentctx, _parentState);
					_localctx.seplist_o__i__s__i__s_json_p__1__1 = _prevctx;
					PushNewRecursionContext(_localctx, _startState, RULE_seplist_o__i__s__i__s_json_p_);
					State = 28;
					if (!(Precpred(Context, 1))) throw new FailedPredicateException(this, "Precpred(Context, 1)");
					State = 29;
					Match(T__1);
					State = 30;
					_localctx.seplist_o__i__s__i__s_json_p__1__3 = json();
					 _localctx.result =  (MyList<JsonValue>) appendList<JsonValue>((MyList<JsonValue>) _localctx.seplist_o__i__s__i__s_json_p__1__1.result, (JsonValue) _localctx.seplist_o__i__s__i__s_json_p__1__3.result);
					                      
					}
					} 
				}
				State = 37;
				ErrorHandler.Sync(this);
				_alt = Interpreter.AdaptivePredict(TokenStream,0,Context);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			ErrorHandler.ReportError(this, re);
			ErrorHandler.Recover(this, re);
		}
		finally {
			UnrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public partial class Seplist_o__i__s__i__s_jsonpair_p_Context : ParserRuleContext {
		public MyList<NameValuePair<string, JsonValue>> result;
		public Seplist_o__i__s__i__s_jsonpair_p_Context seplist_o__i__s__i__s_jsonpair_p__1__1;
		public JsonpairContext seplist_o__i__s__i__s_jsonpair_p__0__1;
		public JsonpairContext seplist_o__i__s__i__s_jsonpair_p__1__3;
		[System.Diagnostics.DebuggerNonUserCode] public JsonpairContext jsonpair() {
			return GetRuleContext<JsonpairContext>(0);
		}
		[System.Diagnostics.DebuggerNonUserCode] public Seplist_o__i__s__i__s_jsonpair_p_Context seplist_o__i__s__i__s_jsonpair_p_() {
			return GetRuleContext<Seplist_o__i__s__i__s_jsonpair_p_Context>(0);
		}
		public Seplist_o__i__s__i__s_jsonpair_p_Context(ParserRuleContext parent, int invokingState)
			: base(parent, invokingState)
		{
		}
		public override int RuleIndex { get { return RULE_seplist_o__i__s__i__s_jsonpair_p_; } }
		[System.Diagnostics.DebuggerNonUserCode]
		public override void EnterRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.EnterSeplist_o__i__s__i__s_jsonpair_p_(this);
		}
		[System.Diagnostics.DebuggerNonUserCode]
		public override void ExitRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.ExitSeplist_o__i__s__i__s_jsonpair_p_(this);
		}
	}

	[RuleVersion(0)]
	public Seplist_o__i__s__i__s_jsonpair_p_Context seplist_o__i__s__i__s_jsonpair_p_() {
		return seplist_o__i__s__i__s_jsonpair_p_(0);
	}

	private Seplist_o__i__s__i__s_jsonpair_p_Context seplist_o__i__s__i__s_jsonpair_p_(int _p) {
		ParserRuleContext _parentctx = Context;
		int _parentState = State;
		Seplist_o__i__s__i__s_jsonpair_p_Context _localctx = new Seplist_o__i__s__i__s_jsonpair_p_Context(Context, _parentState);
		Seplist_o__i__s__i__s_jsonpair_p_Context _prevctx = _localctx;
		int _startState = 8;
		EnterRecursionRule(_localctx, 8, RULE_seplist_o__i__s__i__s_jsonpair_p_, _p);
		try {
			int _alt;
			EnterOuterAlt(_localctx, 1);
			{
			{
			State = 39;
			_localctx.seplist_o__i__s__i__s_jsonpair_p__0__1 = jsonpair();
			 _localctx.result =  new MyList<NameValuePair<string, JsonValue>> { _localctx.seplist_o__i__s__i__s_jsonpair_p__0__1.result };
			            
			}
			Context.Stop = TokenStream.LT(-1);
			State = 49;
			ErrorHandler.Sync(this);
			_alt = Interpreter.AdaptivePredict(TokenStream,1,Context);
			while ( _alt!=2 && _alt!=global::Antlr4.Runtime.Atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( ParseListeners!=null )
						TriggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new Seplist_o__i__s__i__s_jsonpair_p_Context(_parentctx, _parentState);
					_localctx.seplist_o__i__s__i__s_jsonpair_p__1__1 = _prevctx;
					PushNewRecursionContext(_localctx, _startState, RULE_seplist_o__i__s__i__s_jsonpair_p_);
					State = 42;
					if (!(Precpred(Context, 1))) throw new FailedPredicateException(this, "Precpred(Context, 1)");
					State = 43;
					Match(T__1);
					State = 44;
					_localctx.seplist_o__i__s__i__s_jsonpair_p__1__3 = jsonpair();
					 _localctx.result =  (MyList<NameValuePair<string, JsonValue>>) appendList<NameValuePair<string, JsonValue>>((MyList<NameValuePair<string, JsonValue>>) _localctx.seplist_o__i__s__i__s_jsonpair_p__1__1.result, (NameValuePair<string, JsonValue>) _localctx.seplist_o__i__s__i__s_jsonpair_p__1__3.result);
					                      
					}
					} 
				}
				State = 51;
				ErrorHandler.Sync(this);
				_alt = Interpreter.AdaptivePredict(TokenStream,1,Context);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			ErrorHandler.ReportError(this, re);
			ErrorHandler.Recover(this, re);
		}
		finally {
			UnrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public partial class JsonContext : ParserRuleContext {
		public JsonValue result;
		public IToken json_0__1;
		public IToken json_1__1;
		public IToken json_3__1;
		public Seplist_o__i__s__i__s_json_p_Context json_8__2;
		public Seplist_o__i__s__i__s_jsonpair_p_Context json_9__2;
		[System.Diagnostics.DebuggerNonUserCode] public ITerminalNode INT() { return GetToken(simple_jsonParser.INT, 0); }
		[System.Diagnostics.DebuggerNonUserCode] public ITerminalNode FLOAT() { return GetToken(simple_jsonParser.FLOAT, 0); }
		[System.Diagnostics.DebuggerNonUserCode] public ITerminalNode STR() { return GetToken(simple_jsonParser.STR, 0); }
		[System.Diagnostics.DebuggerNonUserCode] public Seplist_o__i__s__i__s_json_p_Context seplist_o__i__s__i__s_json_p_() {
			return GetRuleContext<Seplist_o__i__s__i__s_json_p_Context>(0);
		}
		[System.Diagnostics.DebuggerNonUserCode] public Seplist_o__i__s__i__s_jsonpair_p_Context seplist_o__i__s__i__s_jsonpair_p_() {
			return GetRuleContext<Seplist_o__i__s__i__s_jsonpair_p_Context>(0);
		}
		public JsonContext(ParserRuleContext parent, int invokingState)
			: base(parent, invokingState)
		{
		}
		public override int RuleIndex { get { return RULE_json; } }
		[System.Diagnostics.DebuggerNonUserCode]
		public override void EnterRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.EnterJson(this);
		}
		[System.Diagnostics.DebuggerNonUserCode]
		public override void ExitRule(IParseTreeListener listener) {
			Isimple_jsonListener typedListener = listener as Isimple_jsonListener;
			if (typedListener != null) typedListener.ExitJson(this);
		}
	}

	[RuleVersion(0)]
	public JsonContext json() {
		JsonContext _localctx = new JsonContext(Context, State);
		EnterRule(_localctx, 10, RULE_json);
		try {
			State = 80;
			ErrorHandler.Sync(this);
			switch ( Interpreter.AdaptivePredict(TokenStream,2,Context) ) {
			case 1:
				EnterOuterAlt(_localctx, 1);
				{
				State = 52;
				_localctx.json_0__1 = Match(INT);
				 _localctx.result =  (JsonValue) JInt((int) (int) parseInt((string) (string) getStr((IToken) _localctx.json_0__1)));
				            
				}
				break;
			case 2:
				EnterOuterAlt(_localctx, 2);
				{
				State = 54;
				_localctx.json_1__1 = Match(FLOAT);
				 _localctx.result =  (JsonValue) JFlt((float) (float) parseFlt((string) (string) getStr((IToken) _localctx.json_1__1)));
				            
				}
				break;
			case 3:
				EnterOuterAlt(_localctx, 3);
				{
				State = 56;
				Match(T__2);
				 _localctx.result =  (JsonValue) JNull();
				            
				}
				break;
			case 4:
				EnterOuterAlt(_localctx, 4);
				{
				State = 58;
				_localctx.json_3__1 = Match(STR);
				 _localctx.result =  (JsonValue) JStr((string) (string) unesc((string) (string) getStr((IToken) _localctx.json_3__1)));
				            
				}
				break;
			case 5:
				EnterOuterAlt(_localctx, 5);
				{
				State = 60;
				Match(T__3);
				State = 61;
				Match(T__4);
				 _localctx.result =  (JsonValue) JList((MyList<JsonValue>) new MyList<JsonValue> {  });
				            
				}
				break;
			case 6:
				EnterOuterAlt(_localctx, 6);
				{
				State = 63;
				Match(T__5);
				State = 64;
				Match(T__6);
				 _localctx.result =  (JsonValue) JDict((MyList<NameValuePair<string, JsonValue>>) new MyList<NameValuePair<string, JsonValue>> {  });
				            
				}
				break;
			case 7:
				EnterOuterAlt(_localctx, 7);
				{
				State = 66;
				Match(T__7);
				 _localctx.result =  (JsonValue) JBool((bool) true);
				            
				}
				break;
			case 8:
				EnterOuterAlt(_localctx, 8);
				{
				State = 68;
				Match(T__8);
				 _localctx.result =  (JsonValue) JBool((bool) false);
				            
				}
				break;
			case 9:
				EnterOuterAlt(_localctx, 9);
				{
				State = 70;
				Match(T__3);
				State = 71;
				_localctx.json_8__2 = seplist_o__i__s__i__s_json_p_(0);
				State = 72;
				Match(T__4);
				 _localctx.result =  (JsonValue) JList((MyList<JsonValue>) _localctx.json_8__2.result);
				            
				}
				break;
			case 10:
				EnterOuterAlt(_localctx, 10);
				{
				State = 75;
				Match(T__5);
				State = 76;
				_localctx.json_9__2 = seplist_o__i__s__i__s_jsonpair_p_(0);
				State = 77;
				Match(T__6);
				 _localctx.result =  (JsonValue) JDict((MyList<NameValuePair<string, JsonValue>>) _localctx.json_9__2.result);
				            
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			ErrorHandler.ReportError(this, re);
			ErrorHandler.Recover(this, re);
		}
		finally {
			ExitRule();
		}
		return _localctx;
	}

	public override bool Sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 3: return seplist_o__i__s__i__s_json_p__sempred((Seplist_o__i__s__i__s_json_p_Context)_localctx, predIndex);
		case 4: return seplist_o__i__s__i__s_jsonpair_p__sempred((Seplist_o__i__s__i__s_jsonpair_p_Context)_localctx, predIndex);
		}
		return true;
	}
	private bool seplist_o__i__s__i__s_json_p__sempred(Seplist_o__i__s__i__s_json_p_Context _localctx, int predIndex) {
		switch (predIndex) {
		case 0: return Precpred(Context, 1);
		}
		return true;
	}
	private bool seplist_o__i__s__i__s_jsonpair_p__sempred(Seplist_o__i__s__i__s_jsonpair_p_Context _localctx, int predIndex) {
		switch (predIndex) {
		case 1: return Precpred(Context, 1);
		}
		return true;
	}

	private static int[] _serializedATN = {
		4,1,13,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,
		1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
		3,5,3,34,8,3,10,3,12,3,37,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,
		48,8,4,10,4,12,4,51,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
		5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,
		81,8,5,1,5,0,2,6,8,6,0,2,4,6,8,10,0,0,87,0,12,1,0,0,0,2,16,1,0,0,0,4,19,
		1,0,0,0,6,24,1,0,0,0,8,38,1,0,0,0,10,80,1,0,0,0,12,13,3,2,1,0,13,14,5,
		0,0,1,14,15,6,0,-1,0,15,1,1,0,0,0,16,17,3,10,5,0,17,18,6,1,-1,0,18,3,1,
		0,0,0,19,20,5,12,0,0,20,21,5,1,0,0,21,22,3,10,5,0,22,23,6,2,-1,0,23,5,
		1,0,0,0,24,25,6,3,-1,0,25,26,3,10,5,0,26,27,6,3,-1,0,27,35,1,0,0,0,28,
		29,10,1,0,0,29,30,5,2,0,0,30,31,3,10,5,0,31,32,6,3,-1,0,32,34,1,0,0,0,
		33,28,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,7,1,0,0,0,37,
		35,1,0,0,0,38,39,6,4,-1,0,39,40,3,4,2,0,40,41,6,4,-1,0,41,49,1,0,0,0,42,
		43,10,1,0,0,43,44,5,2,0,0,44,45,3,4,2,0,45,46,6,4,-1,0,46,48,1,0,0,0,47,
		42,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,9,1,0,0,0,51,49,
		1,0,0,0,52,53,5,10,0,0,53,81,6,5,-1,0,54,55,5,11,0,0,55,81,6,5,-1,0,56,
		57,5,3,0,0,57,81,6,5,-1,0,58,59,5,12,0,0,59,81,6,5,-1,0,60,61,5,4,0,0,
		61,62,5,5,0,0,62,81,6,5,-1,0,63,64,5,6,0,0,64,65,5,7,0,0,65,81,6,5,-1,
		0,66,67,5,8,0,0,67,81,6,5,-1,0,68,69,5,9,0,0,69,81,6,5,-1,0,70,71,5,4,
		0,0,71,72,3,6,3,0,72,73,5,5,0,0,73,74,6,5,-1,0,74,81,1,0,0,0,75,76,5,6,
		0,0,76,77,3,8,4,0,77,78,5,7,0,0,78,79,6,5,-1,0,79,81,1,0,0,0,80,52,1,0,
		0,0,80,54,1,0,0,0,80,56,1,0,0,0,80,58,1,0,0,0,80,60,1,0,0,0,80,63,1,0,
		0,0,80,66,1,0,0,0,80,68,1,0,0,0,80,70,1,0,0,0,80,75,1,0,0,0,81,11,1,0,
		0,0,3,35,49,80
	};

	public static readonly ATN _ATN =
		new ATNDeserializer().Deserialize(_serializedATN);


}
} // namespace simple_json
