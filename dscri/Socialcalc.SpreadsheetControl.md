# Socialcalc.SpreadsheetControl

---

- ### 构造函数***Socialcalc.SpreadsheetControl()***

- - 全局常量：

  - - CurrentSpreadsheetControlObject = null，当前SpreadsheetControl对象

  - 成员属性：

  - - parentNode = null

    - spreadsheetDiv = null

    - requestedHeight = 0

    - requestedWidth = 0

    - requestedSpreadSpaceBelow = 0

    - height = 0

    - width = 0

    - viewheight = 0

    - tabs = [] 

    - - > 上方工具栏，数组里是每个tab的对象

    - - tab：

      - - name

        - text *tab上显示的文字*

        - html

        - - replacements *文字正则替换*

          - > %s: "SocialCalc"
            >
            > %id: spreadsheet.idPrefix
            >
            > %tbt: spreadsheet.toolbartext
            >
            > 其他替换规则**spreadsheet.tabreplacements，但是这个一直是空的**

        - view: "viewname", tab栏下方的主显示内容

        - oncreate: function(), tab对象初始化调用

        - onclick: function()

        - onclickFocus: 文本，若存在，会把页面焦点给id = spreadsheet.idPrefix+text的对象而不是normal keyboardFocus，如果text不是string，（一般为boolean），该值会用作SocialCalc.CmdGotFocus

        - onunclick: function()

    - tabnums = {}

    - - > 在tabs［］里每添加一个tab，tabnums里面就有一个键值对*tab-names／tabs[]下标*指向该tab对象

    - tabreplacements = {}，如果没看错的话，**这个一直是空的**

    - currentTab = -1

    - - > 指向当前tab对象

    - views = {}

    - - > 相应tab下方显示内容

      - > 格式：viewname: views-obj

      - view对象

      - - name: "name"

        - element: node-in-the-dom，初始化填充

        - html:

        - replacements *文字正则替换*

        - > %s: "SocialCalc"
          >
          > %id: spreadsheet.idPrefix
          >
          > %tbt: spreadsheet.toolbartext
          >
          > 其他替换规则**viewobject.replacements**

        - divStyle: sheet view的属性，SocialCalc.setStyles.format

        - oncreate: function(), 初始化的时候调用

        - needsresize: true/false/null

        - onresize: function(), resize的时候调用

        - values: {} onclick方法的可选？参数？值

        - 总有一个sheet view

    - 动态属性

    - - sheet = null, context = null, editor = null, spreadsheetDiv = null, editor Div = null
      - moverange = "", movefrom／movepaste的范围

  - 常量:

  - - ```javascript
      this.idPrefix = "SocialCalc-"; // prefix added to element ids used here, should end in "-"
         this.multipartBoundary = "SocialCalcSpreadsheetControlSave"; // boundary used by SpreadsheetControlCreateSpreadsheetSave
         this.imagePrefix = scc.defaultImagePrefix; // prefix added to img src

         this.toolbarbackground = scc.SCToolbarbackground;
         this.tabbackground = scc.SCTabbackground; // "background-color:#CCC;";
         this.tabselectedCSS = scc.SCTabselectedCSS;
         this.tabplainCSS = scc.SCTabplainCSS;
         this.toolbartext = scc.SCToolbartext;

         this.formulabarheight = scc.SCFormulabarheight; // in pixels, will contain a text input box

         this.statuslineheight = scc.SCStatuslineheight; // in pixels
         this.statuslineCSS = scc.SCStatuslineCSS;
      ```

  - 初始化：

  - - > 代码写成这个样子？？？
      >
      > 初始化代码竟然分成两部分？
      > 创建对象时初始化一部分代码
      >
      > 底下InitializeSpreadsheetControl()方法又初始化一部分
      >
      > wtf！！！！！

  - - sheet = SocialCalc.Sheet()
    - context = SocialCalc.RenderContext(this.sheet)
    - editor = SocialCalc.TableEditor(this.context)
    - CurrentSpreadsheetControlObject = this
    - formulabuttons = {`html`}，formula bar 的按钮
    - tabs，tabnums也都初始化了orz


- - 成员方法

  - - InitializeSpreadsheetControl(node, height, width, spacebelow)

    - - > spreadsheet.requestedHeight = height;
        > spreadsheet.requestedWidth = width;
        > spreadsheet.requestedSpaceBelow = spacebelow;
        > spreadsheet.parentNode = node;
        >
        > spreadsheetDiv = document.createElement("div");
        >
        > 设置tab样式，创建tab栏的html代码，并加入dom树
        >
        > 加入tab栏的各种button，奇怪recalcbutton并没有出现在页面上
        >
        > 创建formula bar，包括inputbox与formula button，挂载载dom树上
        >
        > 创建view，加入dom树
        >
        > **初始化sheet view**
        >
        > 创建状态栏，加入dom树
        >
        > //需要重刷新界面

    - DoOnResize()

    - - >根据SizeSSDiv()的值重新计算spreadsheet的尺寸

    - SizeSSDiv()

    - - > 计算出spreadsheetDiv合理的尺寸
        >
        > 并修改相应的属性值
        >
        > 判断spreadsheet的现有尺寸是否跟计算出的相同，若不同，返回true，大概意思是需要重算

    - ExcuteCommand(combostr, sstr)//SpreadsheetControlExecuteCommand

    - - >解析命令，combostr是指需要执行的命令字符串，sstr是指样式字符串
        >
        >命令最后全部集中在combostr中
        >
        >```javascript
        >combostr = combostr.replace(/%C/g, str.C);
        >   combostr = combostr.replace(/%R/g, str.R);
        >   combostr = combostr.replace(/%N/g, str.N);
        >   combostr = combostr.replace(/%S/g, str.S);
        >   combostr = combostr.replace(/%W/g, str.W);
        >   combostr = combostr.replace(/%P/g, str.P);
        >```
        >
        >str.CRNSWP分别指：
        >
        >- C: 坐标coord，若是范围，指左上:右下
        >- R: 范围，如果是单个单元格，坐标等于自己：自己
        >- W: 应该是width？？？宽度，完全没明白这个属性干嘛用**未完**
        >- S: style
        >- N: 换行
        >- P: 换成％？？？？

      - 丢给tableeditor的EditorScheduleSheetCommands(combostr, true, false)执行命令*true: saveundo, false: ignorebusy*

    - CreateSheetHTML()

    - - 返回整个表单的html。。。貌似是为了**测试**而用？？？

    - CreateCellHTML(coord)

    - - 返回一个cell的html，。。。也是为了**测试**吧

    - CreateCellHTMLSave(range)

    - - 返回cell的储存格式，***以确认，createHTML系列方法都是为了在页面alert，都是为了测试***

    - CreateSpreadsheetSave(otherparts)

    - - >- 这个方法本质上也是为了测试，输出sheetsave
        >- 不过在sheetsave前面加上了version, content-type, boundary等参数
        >- 实际上sheetsave还是调用CreateSheetSave()方法
        >- editor setting是调用SavaEditorSetting()方法

    - DecodeSpreadsheetSave(str)

    - - > 页面上reload按钮之行后，可以加载之前save的sheetsave

    - ParseSheetSave(str) = sheet.ParseSheetSave(str)

    - CreateSheetSave() = sheet.CreateSheetSave()

  - 其他方法，对象：

  - - SocialCalc.LocalizeStringList = {}

    - > 初始值为空，但是每次本地化一次，每次往里面推一个值
      >
      > 本地化先查找这里面有没有，提高性能

    - SocialCalc.LocalizeString(str)

    - SocialCalc.LocalizeSubString(str)

    - > 将字符串本地（*很奇怪的命名，其实只是做了字符串的替换*）化，改编成"s_loc_***"的样子
      >
      > e.g.
      >
      > ```javascript
      >  s_loc_align_center: "Align Center",
      >    s_loc_align_left: "Align Left",
      >    s_loc_align_right: "Align Right",
      >    s_loc_alignment: "Alignment",
      >    s_loc_audit: "Audit",
      >    s_loc_audit_trail_this_session: "Audit Trail This Session",
      >    s_loc_auto: "Auto",
      >    s_loc_auto_sum: "Auto Sum",
      >    s_loc_auto_wX_commas: "Auto w/ commas",
      >    s_loc_automatic: "Automatic",
      > ```

    - SocialCalc.GetSpreadsheetControlObject()，得到当前SpreadsheetControl对象

    - SocialCalc.SetTab(obj)，切换tab，改变相应的样式与view

    - SocialCalc.SpreadsheetControlStatuslineCallback(editor, status, arg, params)//设置状态栏内容

    - SocialCalc.CmdGotFocus(obj)，当前元素获得键盘事件焦点

    - SocialCalc.DoButtonCmd(e, buttoninfo, bobj)，bobj是button obj。也就是说把tab栏的命令也放在cmd一类了

    - SocialCalc.DoCmd(obj, which)，which是具体命令，也就是解析各种命令，然后交给executecommand执行

    - - > undo, redo,**未完**,

    - SocialCalc.SpreadsheetCmdLookup = {}，命令预览

    - SocialCalc.SpreadsheetCmdSLookup = {}，另一些命令预览，负责样式