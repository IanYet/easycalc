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

    - DoOnResize()

    - SizeSSDiv()

    - ExcuteCommand(combostr, sstr)

    - CreateSheetHTML()

    - CreateSpreadsheetSave(otherparts)

    - DecodeSpreadsheetSave(str)

    - CreateCellHTML(coord)

    - CreateCellHTMLSave(range)

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