# SocialCalc.Cell

------

- coord: 单元格坐标，例如：a1

- dataValue: 单元格的实际值，会被用于计算，与格式化

- datatype: *（可选）*，若存在，*v=num, t = text, f = formula c=constant*

- formula：*（可选）*，若存在，用于计算或常量的公式

- - > **我觉得**就是方法，自定义的datatype的方法**有点蒙蔽**


- valueType : 单元格属性，比如*b为空， n为数值，t是文本，e是error*
- displayValue：*（可选）*,将datatvalue格式化渲染，也就是显示在屏幕上的样子。
- parseinfo：*（可选）*，若存在，缓存解析过的formula
- 主要用来渲染，重写默认值的**可选**属性，*注意，以下默认**可选**，不再单独说明*
- - bt, br, bb, bl：边框属性
  - color, font, bgcolor：就不用说了吧，望文生义系列
  - layout：包括垂直对准alignment，边距padding
  - cellformat：水平对准alignment
  - nontextvalueformats：非文本值的格式，比如number
  - textvalueformats：同上
  - colspan，rowspan：同javafx的意义，跨行跨列数
  - cssc：自定义css classname
  - csss：自定义css
  - mod：是否可修改，若可以，"y"
  - comment：单元格*注释?评论*字符串

# 