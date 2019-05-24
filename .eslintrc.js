// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    /* 
     下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
      主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
      "off" -> 0 关闭规则
      "warn" -> 1 开启警告规则
      "error" -> 2 开启错误规则
    */
    rules: {
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
      //是否强制使用一致的缩进
      'indent': [
        'error',
        2,
        {
            SwitchCase: 1,
            flatTernaryExpressions: true
        }
      ],
      // 是否禁止末尾逗号
      'comma-dangle': 0,
      // 空格和 tab 混合缩进提醒
      "no-mixed-spaces-and-tabs": 2,
      //不强制'//'后使用空格
      'spaced-comment': 2,
      // 允许出现多行空格
      'no-multiple-empty-lines': 0,
      // 在非赋值或条件语句中使用 new 关键字予以提示
      "no-new": 1,
      // 禁止扩展原生类型
      "no-extend-native": 2,
      // 禁止对原生对象赋值
      "no-native-reassign": 2,
      // 禁止 case 语句落空
      "no-fallthrough": 0,
      // 禁用一成不变的循环条件
      "no-unmodified-loop-condition": 2,
      // 禁止将变量初始化为 undefined
      "no-undef-init": 2,
      //对未使用的变量予以提示
      'no-unused-vars': 2,
      //强制在对象字面量的属性中键和值之间使用一致的间距
      'key-spacing': 2,
      //关键字前后一致空格警告
      'keyword-spacing':2,
      //禁止function中的同名参数
      'no-dupe-args': 2,
      //禁止空函数 -- 可以空的方法如：回调默认值 @ctj
      'no-empty-function': 0,
      //禁止对 function 声明重新赋值
      'no-func-assign': 2,
      //禁止出现重复的 case 标签
      'no-duplicate-case': 2,
      //禁止条件中使用常量
      'no-constant-condition': 2,
      //禁止在return、throw、continue 和 break 语句之后出现不可达代码
      'no-unreachable': 2,
      //	要求 switch 语句中有 default 分支
      'default-case': 0,
      //要求使用 === 和 !==
      'eqeqeq': 2,
      //禁止使用多行字符串
      'no-multi-str': 0,
      //要求构造函数首字母大写
      'new-cap': 2,
      //模块重复导入警告
      'no-duplicate-imports':2,
      //代码块花括号之前空格警告
      'space-before-blocks':2,
      // 是否强制统一单引号双引号
      'quotes': [1, "single"]
    },
    parserOptions: {
      parser: "babel-eslint"
    }
}