# SocialCalc.Sheet

---

- **Reset()**
- - 成员属性
  - - cells = {坐标：cell对象}

    - attribs: sheet属性

    - - lastcol = 1
      - lastrow = 1
      - defaultlayout = 0

    - rowattribs

    - - height: {}, 依据行数字而变，比如1，2.。。
      - hide:{}

    - colattribs

    - - width:{}, 依据列名而变，比如a,b,c
      - hide:{}

    - layouts = [], layouthash = {}，单元格布局列表

    - fonts = [], fonthash = {}，单元格字体列表

    - colors = [], colorhash = {}，单元格颜色列表

    - cellformats = []. cellformathash = {}，单元格格式列表，主要是水平居中的样式

    - borderstyles = [], borderstylehash = {}，表框格式列表

    - valueformats = [], valueformathash = {}，单元格内容格式列表

    - > - hash应该是校验所用e.g.
      >
      > ```javascript
      > case "border":
      >             sheetobj.borderstyles[parts[1]-0]=parts[2];
      >             sheetobj.borderstylehash[parts[2]]=parts[1]-0;
      >             break;
      > ```
      >
      > 但是不知道为什么是object，但是底下代码写的又是数组。。。
      >
      > - 以上属性，全是cell对象的对应属性列表，所以cell对象相应属性的值只是一个数字，是该列表的指针

    - copiedfrom = "", 黏贴的内容

    - changes = SocialCalc.UndoStack()

    - renderneeded = false, 是否渲染

    - changedrendervalues = true, 若为真，表示跨行／列和字体已经被**ExecuteSheetCommand & GetStyle**改变了

    - recalcchangedvalue = false, 如果recalc导致单元格calculated值的改变，则为真