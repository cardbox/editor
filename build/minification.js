const nameCache = {}

export const minifyConfig = ({ beautify, inline = true }) => ({
  parse: {
    bare_returns: false,
    ecma: 8,
    html5_comments: false,
    shebang: true,
  },
  compress: {
    arrows: true,
    arguments: true,
    booleans: true,
    booleans_as_integers: true,
    collapse_vars: true,
    comparisons: true,
    computed_props: true,
    conditionals: true,
    dead_code: true,
    directives: true,
    drop_console: false,
    drop_debugger: true,
    ecma: 8,
    evaluate: true,
    expression: true, // ?
    hoist_funs: true, // ?
    hoist_props: true,
    hoist_vars: false,
    if_return: true,
    inline,
    join_vars: true, // ?

    defaults: false,
    keep_classnames: false,
    keep_fargs: false,
    keep_fnames: false,
    loops: true,
    module: true,
    properties: true,
    pure_getters: true,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: true,
    side_effects: true,
    switches: true,
    toplevel: true,

    typeofs: true,
    unused: true,
    passes: 3,

    unsafe_arrows: true,
    unsafe_Function: true,
    unsafe_math: true,
    unsafe_proto: true,
  },
  mangle: {
    reserved: ['effector', 'effectorVue', 'effectorReact', 'it', 'test'],
    eval: true,
    keep_classnames: false,
    keep_fnames: false,
    module: true,
    toplevel: true, // ?
    safari10: false,
  },
  output: {
    ascii_only: false,
    braces: false, // ?
    comments: false,
    ecma: 8,
    beautify,
    indent_level: 2,
    inline_script: false, // ?
    keep_quoted_props: false, // ?
    quote_keys: false,
    quote_style: 3, // ?
    safari10: false,
    semicolons: true, // ?
    shebang: true,
    webkit: false,
    wrap_iife: false,
  },
  ecma: 8,
  keep_classnames: false,
  keep_fnames: false,
  ie8: false,
  module: true,
  nameCache,
  safari10: false,
  toplevel: true,
  warnings: true,
})
