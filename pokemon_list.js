const pokemon = [
    {'id':'001','name':'妙蛙種子','japaneseName':'フシギダネ'},
    {'id':'002','name':'妙蛙草','japaneseName':'フシギソウ'},
    {'id':'003','name':'妙蛙花','japaneseName':'フシギバナ'},
    {'id':'004','name':'小火龍','japaneseName':'ヒトカゲ'},
    {'id':'005','name':'火恐龍','japaneseName':'リザード'},
    {'id':'006','name':'噴火龍','japaneseName':'リザードン'},
    {'id':'007','name':'傑尼龜','japaneseName':'ゼニガメ'},
    {'id':'008','name':'卡咪龜','japaneseName':'カメール'},
    {'id':'009','name':'水箭龜','japaneseName':'カメックス'},
    {'id':'010','name':'綠毛蟲','japaneseName':'キャタピー'},
    {'id':'011','name':'鐵甲蛹','japaneseName':'トランセル'},
    {'id':'012','name':'巴大蝶','japaneseName':'バタフリー'},
    {'id':'013','name':'獨角蟲','japaneseName':'ビードル'},
    {'id':'014','name':'鐵殼蛹','japaneseName':'コクーン'},
    {'id':'015','name':'大針蜂','japaneseName':'スピアー'},
    {'id':'016','name':'波波','japaneseName':'ポッポ'},
    {'id':'017','name':'比比鳥','japaneseName':'ピジョン'},
    {'id':'018','name':'大比鳥','japaneseName':'ピジョット'},
    {'id':'019','name':'小拉達','japaneseName':'コラッタ'},
    {'id':'020','name':'拉達','japaneseName':'ラッタ'},
    {'id':'021','name':'烈雀','japaneseName':'オニスズメ'},
    {'id':'022','name':'大嘴雀','japaneseName':'オニドリル'},
    {'id':'023','name':'阿柏蛇','japaneseName':'アーボ'},
    {'id':'024','name':'阿柏怪','japaneseName':'アーボック'},
    {'id':'025','name':'皮卡丘','japaneseName':'ピカチュウ'},
    {'id':'026','name':'雷丘','japaneseName':'ライチュウ'},
    {'id':'027','name':'穿山鼠','japaneseName':'サンド'},
    {'id':'028','name':'穿山王','japaneseName':'サンドパン'},
    {'id':'029','name':'尼多蘭','japaneseName':'ニドラン♀'},
    {'id':'030','name':'尼多娜','japaneseName':'ニドリーナ'},
    {'id':'031','name':'尼多后','japaneseName':'ニドクイン'},
    {'id':'032','name':'尼多朗','japaneseName':'ニドラン♂'},
    {'id':'033','name':'尼多力諾','japaneseName':'ニドリーノ'},
    {'id':'034','name':'尼多王','japaneseName':'ニドキング'},
    {'id':'035','name':'皮皮','japaneseName':'ピッピ'},
    {'id':'036','name':'皮可西','japaneseName':'ピクシー'},
    {'id':'037','name':'六尾','japaneseName':'ロコン'},
    {'id':'038','name':'九尾','japaneseName':'キュウコン'},
    {'id':'039','name':'胖丁','japaneseName':'プリン'},
    {'id':'040','name':'胖可丁','japaneseName':'プクリン'},
    {'id':'041','name':'超音蝠','japaneseName':'ズバット'},
    {'id':'042','name':'大嘴蝠','japaneseName':'ゴルバット'},
    {'id':'043','name':'走路草','japaneseName':'ナゾノクサ'},
    {'id':'044','name':'臭臭花','japaneseName':'クサイハナ'},
    {'id':'045','name':'霸王花','japaneseName':'ラフレシア'},
    {'id':'046','name':'派拉斯','japaneseName':'パラス'},
    {'id':'047','name':'派拉斯特','japaneseName':'パラセクト'},
    {'id':'048','name':'毛球','japaneseName':'コンパン'},
    {'id':'049','name':'摩魯蛾','japaneseName':'モルフォン'},
    {'id':'050','name':'地鼠','japaneseName':'ディグダ'},
    {'id':'051','name':'三地鼠','japaneseName':'ダグトリオ'},
    {'id':'052','name':'喵喵','japaneseName':'ニャース'},
    {'id':'053','name':'貓老大','japaneseName':'ペルシアン'},
    {'id':'054','name':'可達鴨','japaneseName':'コダック'},
    {'id':'055','name':'哥達鴨','japaneseName':'ゴルダック'},
    {'id':'056','name':'猴怪','japaneseName':'マンキー'},
    {'id':'057','name':'火暴猴','japaneseName':'オコリザル'},
    {'id':'058','name':'卡蒂狗','japaneseName':'ガーディ'},
    {'id':'059','name':'風速狗','japaneseName':'ウインディ'},
    {'id':'060','name':'蚊香蝌蚪','japaneseName':'ニョロモ'},
    {'id':'061','name':'蚊香君','japaneseName':'ニョロゾ'},
    {'id':'062','name':'蚊香泳士','japaneseName':'ニョロボン'},
    {'id':'063','name':'凱西','japaneseName':'ケーシィ'},
    {'id':'064','name':'勇基拉','japaneseName':'ユンゲラー'},
    {'id':'065','name':'胡地','japaneseName':'フーディン'},
    {'id':'066','name':'腕力','japaneseName':'ワンリキー'},
    {'id':'067','name':'豪力','japaneseName':'ゴーリキー'},
    {'id':'068','name':'怪力','japaneseName':'カイリキー'},
    {'id':'069','name':'喇叭芽','japaneseName':'マダツボミ'},
    {'id':'070','name':'口呆花','japaneseName':'ウツドン'},
    {'id':'071','name':'大食花','japaneseName':'ウツボット'},
    {'id':'072','name':'瑪瑙水母','japaneseName':'メノクラゲ'},
    {'id':'073','name':'毒刺水母','japaneseName':'ドククラゲ'},
    {'id':'074','name':'小拳石','japaneseName':'イシツブテ'},
    {'id':'075','name':'隆隆石','japaneseName':'ゴローン'},
    {'id':'076','name':'隆隆岩','japaneseName':'ゴローニャ'},
    {'id':'077','name':'小火馬','japaneseName':'ポニータ'},
    {'id':'078','name':'烈焰馬','japaneseName':'ギャロップ'},
    {'id':'079','name':'呆呆獸','japaneseName':'ヤドン'},
    {'id':'080','name':'呆殼獸','japaneseName':'ヤドラン'},
    {'id':'081','name':'小磁怪','japaneseName':'コイル'},
    {'id':'082','name':'三合一磁怪','japaneseName':'レアコイル'},
    {'id':'083','name':'大蔥鴨','japaneseName':'カモネギ'},
    {'id':'084','name':'嘟嘟','japaneseName':'ドードー'},
    {'id':'085','name':'嘟嘟利','japaneseName':'ドードリオ'},
    {'id':'086','name':'小海獅','japaneseName':'パウワウ'},
    {'id':'087','name':'白海獅','japaneseName':'ジュゴン'},
    {'id':'088','name':'臭泥','japaneseName':'ベトベター'},
    {'id':'089','name':'臭臭泥','japaneseName':'ベトベトン'},
    {'id':'090','name':'大舌貝','japaneseName':'シェルダー'},
    {'id':'091','name':'刺甲貝','japaneseName':'パルシェン'},
    {'id':'092','name':'鬼斯','japaneseName':'ゴース'},
    {'id':'093','name':'鬼斯通','japaneseName':'ゴースト'},
    {'id':'094','name':'耿鬼','japaneseName':'ゲンガー'},
    {'id':'095','name':'大岩蛇','japaneseName':'イワーク'},
    {'id':'096','name':'催眠貘','japaneseName':'スリープ'},
    {'id':'097','name':'引夢貘人','japaneseName':'スリーパー'},
    {'id':'098','name':'大鉗蟹','japaneseName':'クラブ'},
    {'id':'099','name':'巨鉗蟹','japaneseName':'キングラー'},
    {'id':'100','name':'霹靂電球','japaneseName':'ビリリダマ'},
    {'id':'101','name':'頑皮雷彈','japaneseName':'マルマイン'},
    {'id':'102','name':'蛋蛋','japaneseName':'タマタマ'},
    {'id':'103','name':'椰蛋樹','japaneseName':'ナッシー'},
    {'id':'104','name':'卡拉卡拉','japaneseName':'カラカラ'},
    {'id':'105','name':'嘎啦嘎啦','japaneseName':'ガラガラ'},
    {'id':'106','name':'飛腿郎','japaneseName':'サワムラー'},
    {'id':'107','name':'快拳郎','japaneseName':'エビワラー'},
    {'id':'108','name':'大舌頭','japaneseName':'ベロリンガ'},
    {'id':'109','name':'瓦斯彈','japaneseName':'ドガース'},
    {'id':'110','name':'雙彈瓦斯','japaneseName':'マタドガス'},
    {'id':'111','name':'獨角犀牛','japaneseName':'サイホーン'},
    {'id':'112','name':'鑽角犀獸','japaneseName':'サイドン'},
    {'id':'113','name':'吉利蛋','japaneseName':'ラッキー'},
    {'id':'114','name':'蔓藤怪','japaneseName':'モンジャラ'},
    {'id':'115','name':'袋獸','japaneseName':'ガルーラ'},
    {'id':'116','name':'墨海馬','japaneseName':'タッツー'},
    {'id':'117','name':'海刺龍','japaneseName':'シードラ'},
    {'id':'118','name':'角金魚','japaneseName':'トサキント'},
    {'id':'119','name':'金魚王','japaneseName':'アズマオウ'},
    {'id':'120','name':'海星星','japaneseName':'ヒトデマン'},
    {'id':'121','name':'寶石海星','japaneseName':'スターミー'},
    {'id':'122','name':'魔牆人偶','japaneseName':'バリヤード'},
    {'id':'123','name':'飛天螳螂','japaneseName':'ストライク'},
    {'id':'124','name':'迷唇姐','japaneseName':'ルージュラ'},
    {'id':'125','name':'電擊獸','japaneseName':'エレブー'},
    {'id':'126','name':'鴨嘴火獸','japaneseName':'ブーバー'},
    {'id':'127','name':'凱羅斯','japaneseName':'カイロス'},
    {'id':'128','name':'肯泰羅','japaneseName':'ケンタロス'},
    {'id':'129','name':'鯉魚王','japaneseName':'コイキング'},
    {'id':'130','name':'暴鯉龍','japaneseName':'ギャラドス'},
    {'id':'131','name':'拉普拉斯','japaneseName':'ラプラス'},
    {'id':'132','name':'百變怪','japaneseName':'メタモン'},
    {'id':'133','name':'伊布','japaneseName':'イーブイ'},
    {'id':'134','name':'水伊布','japaneseName':'シャワーズ'},
    {'id':'135','name':'雷伊布','japaneseName':'サンダース'},
    {'id':'136','name':'火伊布','japaneseName':'ブースター'},
    {'id':'137','name':'多邊獸','japaneseName':'ポリゴン'},
    {'id':'138','name':'菊石獸','japaneseName':'オムナイト'},
    {'id':'139','name':'多刺菊石獸','japaneseName':'オムスター'},
    {'id':'140','name':'化石盔','japaneseName':'カブト'},
    {'id':'141','name':'鐮刀盔','japaneseName':'カブトプス'},
    {'id':'142','name':'化石翼龍','japaneseName':'プテラ'},
    {'id':'143','name':'卡比獸','japaneseName':'カビゴン'},
    {'id':'144','name':'急凍鳥','japaneseName':'フリーザー'},
    {'id':'145','name':'閃電鳥','japaneseName':'サンダー'},
    {'id':'146','name':'火焰鳥','japaneseName':'ファイヤー'},
    {'id':'147','name':'迷你龍','japaneseName':'ミニリュウ'},
    {'id':'148','name':'哈克龍','japaneseName':'ハクリュー'},
    {'id':'149','name':'快龍','japaneseName':'カイリュー'},
    {'id':'150','name':'超夢','japaneseName':'ミュウツー'},
    {'id':'151','name':'夢幻','japaneseName':'ミュウ'},
    {'id':'152','name':'菊草葉','japaneseName':'チコリータ'},
    {'id':'153','name':'月桂葉','japaneseName':'ベイリーフ'},
    {'id':'154','name':'大竺葵','japaneseName':'メガニウム'},
    {'id':'155','name':'火球鼠','japaneseName':'ヒノアラシ'},
    {'id':'156','name':'火岩鼠','japaneseName':'マグマラシ'},
    {'id':'157','name':'火暴獸','japaneseName':'バクフーン'},
    {'id':'158','name':'小鋸鱷','japaneseName':'ワニノコ'},
    {'id':'159','name':'藍鱷','japaneseName':'アリゲイツ'},
    {'id':'160','name':'大力鱷','japaneseName':'オーダイル'},
    {'id':'161','name':'尾立','japaneseName':'オタチ'},
    {'id':'162','name':'大尾立','japaneseName':'オオタチ'},
    {'id':'163','name':'咕咕','japaneseName':'ホーホー'},
    {'id':'164','name':'貓頭夜鷹','japaneseName':'ヨルノズク'},
    {'id':'165','name':'芭瓢蟲','japaneseName':'レディバ'},
    {'id':'166','name':'安瓢蟲','japaneseName':'レディアン'},
    {'id':'167','name':'圓絲蛛','japaneseName':'イトマル'},
    {'id':'168','name':'阿利多斯','japaneseName':'アリアドス'},
    {'id':'169','name':'叉字蝠','japaneseName':'クロバット'},
    {'id':'170','name':'燈籠魚','japaneseName':'チョンチー'},
    {'id':'171','name':'電燈怪','japaneseName':'ランターン'},
    {'id':'172','name':'皮丘','japaneseName':'ピチュー'},
    {'id':'173','name':'皮寶寶','japaneseName':'ピィ'},
    {'id':'174','name':'寶寶丁','japaneseName':'ププリン'},
    {'id':'175','name':'波克比','japaneseName':'トゲピー'},
    {'id':'176','name':'波克基古','japaneseName':'トゲチック'},
    {'id':'177','name':'天然雀','japaneseName':'ネイティ'},
    {'id':'178','name':'天然鳥','japaneseName':'ネイティオ'},
    {'id':'179','name':'咩利羊','japaneseName':'メリープ'},
    {'id':'180','name':'蓬蓬羊','japaneseName':'モココ'},
    {'id':'181','name':'電龍','japaneseName':'デンリュウ'},
    {'id':'182','name':'美麗花','japaneseName':'キレイハナ'},
    {'id':'183','name':'瑪力露','japaneseName':'マリル'},
    {'id':'184','name':'瑪力露麗','japaneseName':'マリルリ'},
    {'id':'185','name':'樹才怪','japaneseName':'ウソッキー'},
    {'id':'186','name':'蚊香蛙皇','japaneseName':'ニョロトノ'},
    {'id':'187','name':'毽子草','japaneseName':'ハネッコ'},
    {'id':'188','name':'毽子花','japaneseName':'ポポッコ'},
    {'id':'189','name':'毽子棉','japaneseName':'ワタッコ'},
    {'id':'190','name':'長尾怪手','japaneseName':'エイパム'},
    {'id':'191','name':'向日種子','japaneseName':'ヒマナッツ'},
    {'id':'192','name':'向日花怪','japaneseName':'キマワリ'},
    {'id':'193','name':'蜻蜻蜓','japaneseName':'ヤンヤンマ'},
    {'id':'194','name':'烏波','japaneseName':'ウパー'},
    {'id':'195','name':'沼王','japaneseName':'ヌオー'},
    {'id':'196','name':'太陽伊布','japaneseName':'エーフィ'},
    {'id':'197','name':'月亮伊布','japaneseName':'ブラッキー'},
    {'id':'198','name':'黑暗鴉','japaneseName':'ヤミカラス'},
    {'id':'199','name':'呆呆王','japaneseName':'ヤドキング'},
    {'id':'200','name':'夢妖','japaneseName':'ムウマ'},
    {'id':'201','name':'未知圖騰','japaneseName':'アンノーン'},
    {'id':'202','name':'果然翁','japaneseName':'ソーナンス'},
    {'id':'203','name':'麒麟奇','japaneseName':'キリンリキ'},
    {'id':'204','name':'榛果球','japaneseName':'クヌギダマ'},
    {'id':'205','name':'佛烈托斯','japaneseName':'フォレトス'},
    {'id':'206','name':'土龍弟弟','japaneseName':'ノコッチ'},
    {'id':'207','name':'天蠍','japaneseName':'グライガー'},
    {'id':'208','name':'大鋼蛇','japaneseName':'ハガネール'},
    {'id':'209','name':'布魯','japaneseName':'ブルー'},
    {'id':'210','name':'布魯皇','japaneseName':'グランブル'},
    {'id':'211','name':'千針魚','japaneseName':'ハリーセン'},
    {'id':'212','name':'巨鉗螳螂','japaneseName':'ハッサム'},
    {'id':'213','name':'壺壺','japaneseName':'ツボツボ'},
    {'id':'214','name':'赫拉克羅斯','japaneseName':'ヘラクロス'},
    {'id':'215','name':'狃拉','japaneseName':'ニューラ'},
    {'id':'216','name':'熊寶寶','japaneseName':'ヒメグマ'},
    {'id':'217','name':'圈圈熊','japaneseName':'リングマ'},
    {'id':'218','name':'熔岩蟲','japaneseName':'マグマッグ'},
    {'id':'219','name':'熔岩蝸牛','japaneseName':'マグカルゴ'},
    {'id':'220','name':'小山豬','japaneseName':'ウリムー'},
    {'id':'221','name':'長毛豬','japaneseName':'イノムー'},
    {'id':'222','name':'太陽珊瑚','japaneseName':'サニーゴ'},
    {'id':'223','name':'鐵炮魚','japaneseName':'テッポウオ'},
    {'id':'224','name':'章魚桶','japaneseName':'オクタン'},
    {'id':'225','name':'信使鳥','japaneseName':'デリバード'},
    {'id':'226','name':'巨翅飛魚','japaneseName':'マンタイン'},
    {'id':'227','name':'盔甲鳥','japaneseName':'エアームド'},
    {'id':'228','name':'戴魯比','japaneseName':'デルビル'},
    {'id':'229','name':'黑魯加','japaneseName':'ヘルガー'},
    {'id':'230','name':'刺龍王','japaneseName':'キングドラ'},
    {'id':'231','name':'小小象','japaneseName':'ゴマゾウ'},
    {'id':'232','name':'頓甲','japaneseName':'ドンファン'},
    {'id':'233','name':'多邊獸Ⅱ','japaneseName':'ポリゴン２'},
    {'id':'234','name':'驚角鹿','japaneseName':'オドシシ'},
    {'id':'235','name':'圖圖犬','japaneseName':'ドーブル'},
    {'id':'236','name':'無畏小子','japaneseName':'バルキー'},
    {'id':'237','name':'戰舞郎','japaneseName':'カポエラー'},
    {'id':'238','name':'迷唇娃','japaneseName':'ムチュール'},
    {'id':'239','name':'電擊怪','japaneseName':'エレキッド'},
    {'id':'240','name':'鴨嘴寶寶','japaneseName':'ブビィ'},
    {'id':'241','name':'大奶罐','japaneseName':'ミルタンク'},
    {'id':'242','name':'幸福蛋','japaneseName':'ハピナス'},
    {'id':'243','name':'雷公','japaneseName':'ライコウ'},
    {'id':'244','name':'炎帝','japaneseName':'エンテイ'},
    {'id':'245','name':'水君','japaneseName':'スイクン'},
    {'id':'246','name':'幼基拉斯','japaneseName':'ヨーギラス'},
    {'id':'247','name':'沙基拉斯','japaneseName':'サナギラス'},
    {'id':'248','name':'班基拉斯','japaneseName':'バンギラス'},
    {'id':'249','name':'洛奇亞','japaneseName':'ルギア'},
    {'id':'250','name':'鳳王','japaneseName':'ホウオウ'},
    {'id':'251','name':'時拉比','japaneseName':'セレビィ'},
    {'id':'252','name':'木守宮','japaneseName':'キモリ'},
    {'id':'253','name':'森林蜥蜴','japaneseName':'ジュプトル'},
    {'id':'254','name':'蜥蜴王','japaneseName':'ジュカイン'},
    {'id':'255','name':'火稚雞','japaneseName':'アチャモ'},
    {'id':'256','name':'力壯雞','japaneseName':'ワカシャモ'},
    {'id':'257','name':'火焰雞','japaneseName':'バシャーモ'},
    {'id':'258','name':'水躍魚','japaneseName':'ミズゴロウ'},
    {'id':'259','name':'沼躍魚','japaneseName':'ヌマクロー'},
    {'id':'260','name':'巨沼怪','japaneseName':'ラグラージ'},
    {'id':'261','name':'土狼犬','japaneseName':'ポチエナ'},
    {'id':'262','name':'大狼犬','japaneseName':'グラエナ'},
    {'id':'263','name':'蛇紋熊','japaneseName':'ジグザグマ'},
    {'id':'264','name':'直衝熊','japaneseName':'マッスグマ'},
    {'id':'265','name':'刺尾蟲','japaneseName':'ケムッソ'},
    {'id':'266','name':'甲殼蛹','japaneseName':'カラサリス'},
    {'id':'267','name':'狩獵凤蝶','japaneseName':'アゲハント'},
    {'id':'268','name':'盾甲蛹','japaneseName':'マユルド'},
    {'id':'269','name':'毒粉蛾','japaneseName':'ドクケイル'},
    {'id':'270','name':'蓮葉童子','japaneseName':'ハスボー'},
    {'id':'271','name':'蓮帽小童','japaneseName':'ハスブレロ'},
    {'id':'272','name':'樂天河童','japaneseName':'ルンパッパ'},
    {'id':'273','name':'橡實果','japaneseName':'タネボー'},
    {'id':'274','name':'長鼻葉','japaneseName':'コノハナ'},
    {'id':'275','name':'狡猾天狗','japaneseName':'ダーテング'},
    {'id':'276','name':'傲骨燕','japaneseName':'スバメ'},
    {'id':'277','name':'大王燕','japaneseName':'オオスバメ'},
    {'id':'278','name':'長翅鷗','japaneseName':'キャモメ'},
    {'id':'279','name':'大嘴鷗','japaneseName':'ペリッパー'},
    {'id':'280','name':'拉魯拉絲','japaneseName':'ラルトス'},
    {'id':'281','name':'奇魯莉安','japaneseName':'キルリア'},
    {'id':'282','name':'沙奈朵','japaneseName':'サーナイト'},
    {'id':'283','name':'溜溜糖球','japaneseName':'アメタマ'},
    {'id':'284','name':'雨翅蛾','japaneseName':'アメモース'},
    {'id':'285','name':'蘑蘑菇','japaneseName':'キノココ'},
    {'id':'286','name':'斗笠菇','japaneseName':'キノガッサ'},
    {'id':'287','name':'懶人獺','japaneseName':'ナマケロ'},
    {'id':'288','name':'過動猿','japaneseName':'ヤルキモノ'},
    {'id':'289','name':'請假王','japaneseName':'ケッキング'},
    {'id':'290','name':'土居忍士','japaneseName':'ツチニン'},
    {'id':'291','name':'鐵面忍者','japaneseName':'テッカニン'},
    {'id':'292','name':'脫殼忍者','japaneseName':'ヌケニン'},
    {'id':'293','name':'咕妞妞','japaneseName':'ゴニョニョ'},
    {'id':'294','name':'吼爆彈','japaneseName':'ドゴーム'},
    {'id':'295','name':'爆音怪','japaneseName':'バクオング'},
    {'id':'296','name':'幕下力士','japaneseName':'マクノシタ'},
    {'id':'297','name':'鐵掌力士','japaneseName':'ハリテヤマ'},
    {'id':'298','name':'露力麗','japaneseName':'ルリリ'},
    {'id':'299','name':'朝北鼻','japaneseName':'ノズパス'},
    {'id':'300','name':'向尾喵','japaneseName':'エネコ'},
    {'id':'301','name':'優雅貓','japaneseName':'エネコロロ'},
    {'id':'302','name':'勾魂眼','japaneseName':'ヤミラミ'},
    {'id':'303','name':'大嘴娃','japaneseName':'クチート'},
    {'id':'304','name':'可可多拉','japaneseName':'ココドラ'},
    {'id':'305','name':'可多拉','japaneseName':'コドラ'},
    {'id':'306','name':'波士可多拉','japaneseName':'ボスゴドラ'},
    {'id':'307','name':'瑪沙那','japaneseName':'アサナン'},
    {'id':'308','name':'恰雷姆','japaneseName':'チャーレム'},
    {'id':'309','name':'落雷獸','japaneseName':'ラクライ'},
    {'id':'310','name':'雷電獸','japaneseName':'ライボルト'},
    {'id':'311','name':'正電拍拍','japaneseName':'プラスル'},
    {'id':'312','name':'負電拍拍','japaneseName':'マイナン'},
    {'id':'313','name':'電螢蟲','japaneseName':'バルビート'},
    {'id':'314','name':'甜甜螢','japaneseName':'イルミーゼ'},
    {'id':'315','name':'毒薔薇','japaneseName':'ロゼリア'},
    {'id':'316','name':'溶食獸','japaneseName':'ゴクリン'},
    {'id':'317','name':'吞食獸','japaneseName':'マルノーム'},
    {'id':'318','name':'利牙魚','japaneseName':'キバニア'},
    {'id':'319','name':'巨牙鯊','japaneseName':'サメハダー'},
    {'id':'320','name':'吼吼鯨','japaneseName':'ホエルコ'},
    {'id':'321','name':'吼鯨王','japaneseName':'ホエルオー'},
    {'id':'322','name':'呆火驼','japaneseName':'ドンメル'},
    {'id':'323','name':'噴火驼','japaneseName':'バクーダ'},
    {'id':'324','name':'煤炭龜','japaneseName':'コータス'},
    {'id':'325','name':'跳跳豬','japaneseName':'バネブー'},
    {'id':'326','name':'噗噗豬','japaneseName':'ブーピッグ'},
    {'id':'327','name':'晃晃斑','japaneseName':'パッチール'},
    {'id':'328','name':'大顎蟻','japaneseName':'ナックラー'},
    {'id':'329','name':'超音波幼蟲','japaneseName':'ビブラーバ'},
    {'id':'330','name':'沙漠蜻蜓','japaneseName':'フライゴン'},
    {'id':'331','name':'刺球仙人掌','japaneseName':'サボネア'},
    {'id':'332','name':'夢歌仙人掌','japaneseName':'ノクタス'},
    {'id':'333','name':'青綿鳥','japaneseName':'チルット'},
    {'id':'334','name':'七夕青鳥','japaneseName':'チルタリス'},
    {'id':'335','name':'貓鼬斬','japaneseName':'ザングース'},
    {'id':'336','name':'飯匙蛇','japaneseName':'ハブネーク'},
    {'id':'337','name':'月石','japaneseName':'ルナトーン'},
    {'id':'338','name':'太陽岩','japaneseName':'ソルロック'},
    {'id':'339','name':'泥泥鰍','japaneseName':'ドジョッチ'},
    {'id':'340','name':'鯰魚王','japaneseName':'ナマズン'},
    {'id':'341','name':'龍蝦小兵','japaneseName':'ヘイガニ'},
    {'id':'342','name':'鐵螯龍蝦','japaneseName':'シザリガー'},
    {'id':'343','name':'天秤偶','japaneseName':'ヤジロン'},
    {'id':'344','name':'念力土偶','japaneseName':'ネンドール'},
    {'id':'345','name':'觸手百合','japaneseName':'リリーラ'},
    {'id':'346','name':'搖籃百合','japaneseName':'ユレイドル'},
    {'id':'347','name':'太古羽蟲','japaneseName':'アノプス'},
    {'id':'348','name':'太古盔甲','japaneseName':'アーマルド'},
    {'id':'349','name':'醜醜魚','japaneseName':'ヒンバス'},
    {'id':'350','name':'美納斯','japaneseName':'ミロカロス'},
    {'id':'351','name':'飄浮泡泡','japaneseName':'ポワルン'},
    {'id':'352','name':'變隱龍','japaneseName':'カクレオン'},
    {'id':'353','name':'怨影娃娃','japaneseName':'カゲボウズ'},
    {'id':'354','name':'詛咒娃娃','japaneseName':'ジュペッタ'},
    {'id':'355','name':'夜巡靈','japaneseName':'ヨマワル'},
    {'id':'356','name':'彷徨夜靈','japaneseName':'サマヨール'},
    {'id':'357','name':'熱帶龍','japaneseName':'トロピウス'},
    {'id':'358','name':'風鈴鈴','japaneseName':'チリーン'},
    {'id':'359','name':'阿勃梭魯','japaneseName':'アブソル'},
    {'id':'360','name':'小果然','japaneseName':'ソーナノ'},
    {'id':'361','name':'雪童子','japaneseName':'ユキワラシ'},
    {'id':'362','name':'冰鬼護','japaneseName':'オニゴーリ'},
    {'id':'363','name':'海豹球','japaneseName':'タマザラシ'},
    {'id':'364','name':'海魔獅','japaneseName':'トドグラー'},
    {'id':'365','name':'帝牙海獅','japaneseName':'トドゼルガ'},
    {'id':'366','name':'珍珠貝','japaneseName':'パールル'},
    {'id':'367','name':'獵斑魚','japaneseName':'ハンテール'},
    {'id':'368','name':'櫻花魚','japaneseName':'サクラビス'},
    {'id':'369','name':'古空棘魚','japaneseName':'ジーランス'},
    {'id':'370','name':'愛心魚','japaneseName':'ラブカス'},
    {'id':'371','name':'寶貝龍','japaneseName':'タツベイ'},
    {'id':'372','name':'甲殼龍','japaneseName':'コモルー'},
    {'id':'373','name':'暴飛龍','japaneseName':'ボーマンダ'},
    {'id':'374','name':'鐵啞鈴','japaneseName':'ダンバル'},
    {'id':'375','name':'金屬怪','japaneseName':'メタング'},
    {'id':'376','name':'巨金怪','japaneseName':'メタグロス'},
    {'id':'377','name':'雷吉洛克','japaneseName':'レジロック'},
    {'id':'378','name':'雷吉艾斯','japaneseName':'レジアイス'},
    {'id':'379','name':'雷吉斯奇魯','japaneseName':'レジスチル'},
    {'id':'380','name':'拉帝亞斯','japaneseName':'ラティアス'},
    {'id':'381','name':'拉帝歐斯','japaneseName':'ラティオス'},
    {'id':'382','name':'蓋歐卡','japaneseName':'カイオーガ'},
    {'id':'383','name':'固拉多','japaneseName':'グラードン'},
    {'id':'384','name':'烈空坐','japaneseName':'レックウザ'},
    {'id':'385','name':'基拉祈','japaneseName':'ジラーチ'},
    {'id':'386','name':'代歐奇希斯','japaneseName':'デオキシス'},
    {"id":"387","name":"草苗龜","japaneseName":"ナエトル"},
    {"id":"388","name":"樹林龜","japaneseName":"ハヤシガメ"},
    {"id":"389","name":"土台龜","japaneseName":"ドダイトス"},
    {"id":"390","name":"小火焰猴","japaneseName":"ヒコザル"},
    {"id":"391","name":"猛火猴","japaneseName":"モウカザル"},
    {"id":"392","name":"烈焰猴","japaneseName":"ゴウカザル"},
    {"id":"393","name":"波加曼","japaneseName":"ポッチャマ"},
    {"id":"394","name":"波皇子","japaneseName":"ポッタイシ"},
    {"id":"395","name":"帝王拿波","japaneseName":"エンペルト"},
    {"id":"396","name":"姆克兒","japaneseName":"ムックル"},
    {"id":"397","name":"姆克鳥","japaneseName":"ムクバード"},
    {"id":"398","name":"姆克鷹","japaneseName":"ムクホーク"},
    {"id":"399","name":"大牙狸","japaneseName":"ビッパ"},
    {"id":"400","name":"大尾狸","japaneseName":"ビーダル"},
    {"id":"401","name":"圓法師","japaneseName":"コロボーシ"},
    {"id":"402","name":"音箱蟀","japaneseName":"コロトック"},
    {"id":"403","name":"小貓怪","japaneseName":"コリンク"},
    {"id":"404","name":"樂克貓","japaneseName":"ルクシオ"},
    {"id":"405","name":"倫琴貓","japaneseName":"レントラー"},
    {"id":"406","name":"含羞苞","japaneseName":"スボミー"},
    {"id":"407","name":"羅絲雷朵","japaneseName":"ロズレイド"},
    {"id":"408","name":"頭蓋龍","japaneseName":"ズガイドス"},
    {"id":"409","name":"戰槌龍","japaneseName":"ラムパルド"},
    {"id":"410","name":"盾甲龍","japaneseName":"タテトプス"},
    {"id":"411","name":"護城龍","japaneseName":"トリデプス"},
    {"id":"412","name":"結草兒","japaneseName":"ミノムッチ"},
    {"id":"413","name":"結草貴婦","japaneseName":"ミノマダム"},
    {"id":"414","name":"紳士蛾","japaneseName":"ガーメイル"},
    {"id":"415","name":"三蜜蜂","japaneseName":"ミツハニー"},
    {"id":"416","name":"蜂女王","japaneseName":"ビークイン"},
    {"id":"417","name":"帕奇利茲","japaneseName":"パチリス"},
    {"id":"418","name":"泳圈鼬","japaneseName":"ブイゼル"},
    {"id":"419","name":"浮潛鼬","japaneseName":"フローゼル"},
    {"id":"420","name":"櫻花寶","japaneseName":"チェリンボ"},
    {"id":"421","name":"櫻花兒","japaneseName":"チェリム"},
    {"id":"422","name":"無殼海兔","japaneseName":"カラナクシ"},
    {"id":"423","name":"海兔獸","japaneseName":"トリトドン"},
    {"id":"424","name":"雙尾怪手","japaneseName":"エテボース"},
    {"id":"425","name":"飄飄球","japaneseName":"フワンテ"},
    {"id":"426","name":"隨風球","japaneseName":"フワライド"},
    {"id":"427","name":"捲捲耳","japaneseName":"ミミロル"},
    {"id":"428","name":"長耳兔","japaneseName":"ミミロップ"},
    {"id":"429","name":"夢妖魔","japaneseName":"ムウマージ"},
    {"id":"430","name":"烏鴉頭頭","japaneseName":"ドンカラス"},
    {"id":"431","name":"魅力喵","japaneseName":"ニャルマー"},
    {"id":"432","name":"東施喵","japaneseName":"ブニャット"},
    {"id":"433","name":"鈴鐺響","japaneseName":"リーシャン"},
    {"id":"434","name":"臭鼬噗","japaneseName":"スカンプー"},
    {"id":"435","name":"坦克臭鼬","japaneseName":"スカタンク"},
    {"id":"436","name":"銅鏡怪","japaneseName":"ドーミラー"},
    {"id":"437","name":"青銅鐘","japaneseName":"ドータクン"},
    {"id":"438","name":"盆才怪","japaneseName":"ウソハチ"},
    {"id":"439","name":"魔尼尼","japaneseName":"マネネ"},
    {"id":"440","name":"小福蛋","japaneseName":"ピンプク"},
    {"id":"441","name":"聒噪鳥","japaneseName":"ペラップ"},
    {"id":"442","name":"花岩怪","japaneseName":"ミカルゲ"},
    {"id":"443","name":"圓陸鯊","japaneseName":"フカマル"},
    {"id":"444","name":"尖牙陸鯊","japaneseName":"ガバイト"},
    {"id":"445","name":"烈咬陸鯊","japaneseName":"ガブリアス"},
    {"id":"446","name":"小卡比獸","japaneseName":"ゴンベ"},
    {"id":"447","name":"利歐路","japaneseName":"リオル"},
    {"id":"448","name":"路卡利歐","japaneseName":"ルカリオ"},
    {"id":"449","name":"沙河馬","japaneseName":"ヒポポタス"},
    {"id":"450","name":"河馬獸","japaneseName":"カバルドン"},
    {"id":"451","name":"鉗尾蠍","japaneseName":"スコルピ"},
    {"id":"452","name":"龍王蠍","japaneseName":"ドラピオン"},
    {"id":"453","name":"不良蛙","japaneseName":"グレッグル"},
    {"id":"454","name":"毒骷蛙","japaneseName":"ドクロッグ"},
    {"id":"455","name":"尖牙籠","japaneseName":"マスキッパ"},
    {"id":"456","name":"熒光魚","japaneseName":"ケイコウオ"},
    {"id":"457","name":"霓虹魚","japaneseName":"ネオラント"},
    {"id":"458","name":"小球飛魚","japaneseName":"タマンタ"},
    {"id":"459","name":"雪笠怪","japaneseName":"ユキカブリ"},
    {"id":"460","name":"暴雪王","japaneseName":"ユキノオー"},
    {"id":"461","name":"瑪狃拉","japaneseName":"マニューラ"},
    {"id":"462","name":"自爆磁怪","japaneseName":"ジバコイル"},
    {"id":"463","name":"大舌舔","japaneseName":"ベロベルト"},
    {"id":"464","name":"超甲狂犀","japaneseName":"ドサイドン"},
    {"id":"465","name":"巨蔓藤","japaneseName":"モジャンボ"},
    {"id":"466","name":"電擊魔獸","japaneseName":"エレキブル"},
    {"id":"467","name":"鴨嘴炎獸","japaneseName":"ブーバーン"},
    {"id":"468","name":"波克基斯","japaneseName":"トゲキッス"},
    {"id":"469","name":"遠古巨蜻","japaneseName":"メガヤンマ"},
    {"id":"470","name":"葉伊布","japaneseName":"リーフィア"},
    {"id":"471","name":"冰伊布","japaneseName":"グレイシア"},
    {"id":"472","name":"天蠍王","japaneseName":"グライオン"},
    {"id":"473","name":"象牙豬","japaneseName":"マンムー"},
    {"id":"474","name":"多邊獸Ｚ","japaneseName":"ポリゴンＺ"},
    {"id":"475","name":"艾路雷朵","japaneseName":"エルレイド"},
    {"id":"476","name":"大朝北鼻","japaneseName":"ダイノーズ"},
    {"id":"477","name":"黑夜魔靈","japaneseName":"ヨノワール"},
    {"id":"478","name":"雪妖女","japaneseName":"ユキメノコ"},
    {"id":"479","name":"洛托姆","japaneseName":"ロトム"},
    {"id":"480","name":"由克希","japaneseName":"ユクシー"},
    {"id":"481","name":"艾姆利多","japaneseName":"エムリット"},
    {"id":"482","name":"亞克諾姆","japaneseName":"アグノム"},
    {"id":"483","name":"帝牙盧卡","japaneseName":"ディアルガ"},
    {"id":"484","name":"帕路奇亞","japaneseName":"パルキア"},
    {"id":"485","name":"席多藍恩","japaneseName":"ヒードラン"},
    {"id":"486","name":"雷吉奇卡斯","japaneseName":"レジギガス"},
    {"id":"487","name":"騎拉帝納","japaneseName":"ギラティナ"},
    {"id":"488","name":"克雷色利亞","japaneseName":"クレセリア"},
    {"id":"489","name":"霏歐納","japaneseName":"フィオネ"},
    {"id":"490","name":"瑪納霏","japaneseName":"マナフィ"},
    {"id":"491","name":"達克萊伊","japaneseName":"ダークライ"},
    {"id":"492","name":"謝米","japaneseName":"シェイミ"},
    {"id":"493","name":"阿爾宙斯","japaneseName":"アルセウス"},
    {"id":"494","name":"比克提尼","japaneseName":"ビクティニ"},
    {"id":"495","name":"藤藤蛇","japaneseName":"ツタージャ"},
    {"id":"496","name":"青藤蛇","japaneseName":"ジャノビー"},
    {"id":"497","name":"君主蛇","japaneseName":"ジャローダ"},
    {"id":"498","name":"暖暖猪","japaneseName":"ポカブ"},
    {"id":"499","name":"炒炒猪","japaneseName":"チャオブー"},
    {"id":"500","name":"炎武王","japaneseName":"エンブオー"},
    {"id":"501","name":"水水獭","japaneseName":"ミジュマル"},
    {"id":"502","name":"双刃丸","japaneseName":"フタチマル"},
    {"id":"503","name":"大剑鬼","japaneseName":"ダイケンキ"},
    {"id":"504","name":"探探鼠","japaneseName":"ミネズミ"},
    {"id":"505","name":"步哨鼠","japaneseName":"ミルホッグ"},
    {"id":"506","name":"小约克","japaneseName":"ヨーテリー"},
    {"id":"507","name":"哈约克","japaneseName":"ハーデリア"},
    {"id":"508","name":"长毛狗","japaneseName":"ムーランド"},
    {"id":"509","name":"扒手猫","japaneseName":"チョロネコ"},
    {"id":"510","name":"酷豹","japaneseName":"レパルダス"},
    {"id":"511","name":"花椰猴","japaneseName":"ヤナップ"},
    {"id":"512","name":"花椰猿","japaneseName":"ヤナッキー"},
    {"id":"513","name":"爆香猴","japaneseName":"バオップ"},
    {"id":"514","name":"爆香猿","japaneseName":"バオッキー"},
    {"id":"515","name":"冷水猴","japaneseName":"ヒヤップ"},
    {"id":"516","name":"冷水猿","japaneseName":"ヒヤッキー"},
    {"id":"517","name":"食梦梦","japaneseName":"ムンナ"},
    {"id":"518","name":"梦梦蚀","japaneseName":"ムシャーナ"},
    {"id":"519","name":"豆豆鸽","japaneseName":"マメパト"},
    {"id":"520","name":"咕咕鸽","japaneseName":"ハトーボー"},
    {"id":"521","name":"高傲雉鸡","japaneseName":"ケンホロウ"},
    {"id":"522","name":"斑斑马","japaneseName":"シママ"},
    {"id":"523","name":"雷电斑马","japaneseName":"ゼブライカ"},
    {"id":"524","name":"石丸子","japaneseName":"ダンゴロ"},
    {"id":"525","name":"地幔岩","japaneseName":"ガントル"},
    {"id":"526","name":"庞岩怪","japaneseName":"ギガイアス"},
    {"id":"527","name":"滚滚蝙蝠","japaneseName":"コロモリ"},
    {"id":"528","name":"心蝙蝠","japaneseName":"ココロモリ"},
    {"id":"529","name":"螺钉地鼠","japaneseName":"モグリュー"},
    {"id":"530","name":"龙头地鼠","japaneseName":"ドリュウズ"},
    {"id":"531","name":"差不多娃娃","japaneseName":"タブンネ"},
    {"id":"532","name":"搬运小匠","japaneseName":"ドッコラー"},
    {"id":"533","name":"铁骨土人","japaneseName":"ドテッコツ"},
    {"id":"534","name":"修建老匠","japaneseName":"ローブシン"},
    {"id":"535","name":"圆蝌蚪","japaneseName":"オタマロ"},
    {"id":"536","name":"蓝蟾蜍","japaneseName":"ガマガル"},
    {"id":"537","name":"蟾蜍王","japaneseName":"ガマゲロゲ"},
    {"id":"538","name":"投摔鬼","japaneseName":"ナゲキ"},
    {"id":"539","name":"打击鬼","japaneseName":"ダゲキ"},
    {"id":"540","name":"虫宝包","japaneseName":"クルミル"},
    {"id":"541","name":"宝包茧","japaneseName":"クルマユ"},
    {"id":"542","name":"保姆虫","japaneseName":"ハハコモリ"},
    {"id":"543","name":"百足蜈蚣","japaneseName":"フシデ"},
    {"id":"544","name":"车轮球","japaneseName":"ホイーガ"},
    {"id":"545","name":"蜈蚣王","japaneseName":"ペンドラー"},
    {"id":"546","name":"木棉球","japaneseName":"モンメン"},
    {"id":"547","name":"风妖精","japaneseName":"エルフーン"},
    {"id":"548","name":"百合根娃娃","japaneseName":"チュリネ"},
    {"id":"549","name":"裙儿小姐","japaneseName":"ドレディア"},
    {"id":"550","name":"野蛮鲈鱼","japaneseName":"バスラオ"},
    {"id":"551","name":"黑眼鳄","japaneseName":"メグロコ"},
    {"id":"552","name":"混混鳄","japaneseName":"ワルビル"},
    {"id":"553","name":"流氓鳄","japaneseName":"ワルビアル"},
    {"id":"554","name":"火红不倒翁","japaneseName":"ダルマッカ"},
    {"id":"555","name":"达摩狒狒","japaneseName":"ヒヒダルマ"},
    {"id":"556","name":"沙铃仙人掌","japaneseName":"マラカッチ"},
    {"id":"557","name":"石居蟹","japaneseName":"イシズマイ"},
    {"id":"558","name":"岩殿居蟹","japaneseName":"イワパレス"},
    {"id":"559","name":"滑滑小子","japaneseName":"ズルッグ"},
    {"id":"560","name":"头巾混混","japaneseName":"ズルズキン"},
    {"id":"561","name":"象征鸟","japaneseName":"シンボラー"},
    {"id":"562","name":"哭哭面具","japaneseName":"デスマス"},
    {"id":"563","name":"死神棺","japaneseName":"デスカーン"},
    {"id":"564","name":"原盖海龟","japaneseName":"プロトーガ"},
    {"id":"565","name":"肋骨海龟","japaneseName":"アバゴーラ"},
    {"id":"566","name":"始祖小鸟","japaneseName":"アーケン"},
    {"id":"567","name":"始祖大鸟","japaneseName":"アーケオス"},
    {"id":"568","name":"破破袋","japaneseName":"ヤブクロン"},
    {"id":"569","name":"灰尘山","japaneseName":"ダストダス"},
    {"id":"570","name":"索罗亚","japaneseName":"ゾロア"},
    {"id":"571","name":"索罗亚克","japaneseName":"ゾロアーク"},
    {"id":"572","name":"泡沫栗鼠","japaneseName":"チラーミィ"},
    {"id":"573","name":"奇诺栗鼠","japaneseName":"チラチーノ"},
    {"id":"574","name":"哥德宝宝","japaneseName":"ゴチム"},
    {"id":"575","name":"哥德小童","japaneseName":"ゴチミル"},
    {"id":"576","name":"哥德小姐","japaneseName":"ゴチルゼル"},
    {"id":"577","name":"单卵细胞球","japaneseName":"ユニラン"},
    {"id":"578","name":"双卵细胞球","japaneseName":"ダブラン"},
    {"id":"579","name":"人造细胞卵","japaneseName":"ランクルス"},
    {"id":"580","name":"鸭宝宝","japaneseName":"コアルヒー"},
    {"id":"581","name":"舞天鹅","japaneseName":"スワンナ"},
    {"id":"582","name":"迷你冰","japaneseName":"バニプッチ"},
    {"id":"583","name":"多多冰","japaneseName":"バニリッチ"},
    {"id":"584","name":"双倍多多冰","japaneseName":"バイバニラ"},
    {"id":"585","name":"四季鹿","japaneseName":"シキジカ"},
    {"id":"586","name":"萌芽鹿","japaneseName":"メブキジカ"},
    {"id":"587","name":"电飞鼠","japaneseName":"エモンガ"},
    {"id":"588","name":"盖盖虫","japaneseName":"カブルモ"},
    {"id":"589","name":"骑士蜗牛","japaneseName":"シュバルゴ"},
    {"id":"590","name":"哎呀球菇","japaneseName":"タマゲタケ"},
    {"id":"591","name":"败露球菇","japaneseName":"モロバレル"},
    {"id":"592","name":"轻飘飘","japaneseName":"プルリル"},
    {"id":"593","name":"胖嘟嘟","japaneseName":"ブルンゲル"},
    {"id":"594","name":"保姆曼波","japaneseName":"ママンボウ"},
    {"id":"595","name":"电电虫","japaneseName":"バチュル"},
    {"id":"596","name":"电蜘蛛","japaneseName":"デンチュラ"},
    {"id":"597","name":"种子铁球","japaneseName":"テッシード"},
    {"id":"598","name":"坚果哑铃","japaneseName":"ナットレイ"},
    {"id":"599","name":"齿轮儿","japaneseName":"ギアル"},
    {"id":"600","name":"齿轮组","japaneseName":"ギギアル"},
    {"id":"601","name":"齿轮怪","japaneseName":"ギギギアル"},
    {"id":"602","name":"麻麻小鱼","japaneseName":"シビシラス"},
    {"id":"603","name":"麻麻鳗","japaneseName":"シビビール"},
    {"id":"604","name":"麻麻鳗鱼王","japaneseName":"シビルドン"},
    {"id":"605","name":"小灰怪","japaneseName":"リグレー"},
    {"id":"606","name":"大宇怪","japaneseName":"オーベム"},
    {"id":"607","name":"烛光灵","japaneseName":"ヒトモシ"},
    {"id":"608","name":"灯火幽灵","japaneseName":"ランプラー"},
    {"id":"609","name":"水晶灯火灵","japaneseName":"シャンデラ"},
    {"id":"610","name":"牙牙","japaneseName":"キバゴ"},
    {"id":"611","name":"斧牙龙","japaneseName":"オノンド"},
    {"id":"612","name":"双斧战龙","japaneseName":"オノノクス"},
    {"id":"613","name":"喷嚏熊","japaneseName":"クマシュン"},
    {"id":"614","name":"冻原熊","japaneseName":"ツンベアー"},
    {"id":"615","name":"几何雪花","japaneseName":"フリージオ"},
    {"id":"616","name":"小嘴蜗","japaneseName":"チョボマキ"},
    {"id":"617","name":"敏捷虫","japaneseName":"アギルダー"},
    {"id":"618","name":"泥巴鱼","japaneseName":"マッギョ"},
    {"id":"619","name":"功夫鼬","japaneseName":"コジョフー"},
    {"id":"620","name":"师父鼬","japaneseName":"コジョンド"},
    {"id":"621","name":"赤面龙","japaneseName":"クリムガン"},
    {"id":"622","name":"泥偶小人","japaneseName":"ゴビット"},
    {"id":"623","name":"泥偶巨人","japaneseName":"ゴルーグ"},
    {"id":"624","name":"驹刀小兵","japaneseName":"コマタナ"},
    {"id":"625","name":"劈斩司令","japaneseName":"キリキザン"},
    {"id":"626","name":"爆炸头水牛","japaneseName":"バッフロン"},
    {"id":"627","name":"毛头小鹰","japaneseName":"ワシボン"},
    {"id":"628","name":"勇士雄鹰","japaneseName":"ウォーグル"},
    {"id":"629","name":"秃鹰丫头","japaneseName":"バルチャイ"},
    {"id":"630","name":"秃鹰娜","japaneseName":"バルジーナ"},
    {"id":"631","name":"熔蚁兽","japaneseName":"クイタラン"},
    {"id":"632","name":"铁蚁","japaneseName":"アイアント"},
    {"id":"633","name":"单首龙","japaneseName":"モノズ"},
    {"id":"634","name":"双首暴龙","japaneseName":"ジヘッド"},
    {"id":"635","name":"三首恶龙","japaneseName":"サザンドラ"},
    {"id":"636","name":"燃烧虫","japaneseName":"メラルバ"},
    {"id":"637","name":"火神蛾","japaneseName":"ウルガモス"},
    {"id":"638","name":"勾帕路翁","japaneseName":"コバルオン"},
    {"id":"639","name":"代拉基翁","japaneseName":"テラキオン"},
    {"id":"640","name":"毕力吉翁","japaneseName":"ビリジオン"},
    {"id":"641","name":"龙卷云","japaneseName":"トルネロス"},
    {"id":"642","name":"雷电云","japaneseName":"ボルトロス"},
    {"id":"643","name":"莱希拉姆","japaneseName":"レシラム"},
    {"id":"644","name":"捷克罗姆","japaneseName":"ゼクロム"},
    {"id":"645","name":"土地云","japaneseName":"ランドロス"},
    {"id":"646","name":"酋雷姆","japaneseName":"キュレム"},
    {"id":"647","name":"凯路迪欧","japaneseName":"シェイミ"},
    {"id":"648","name":"美洛耶塔","japaneseName":"メロエッタ"},
    {"id":"649","name":"盖诺赛克特","japaneseName":"ゲノセクト"}
];


export function pokemon_list(id) {
    const foundPokemon = pokemon.find(p => p.id === id);
    return foundPokemon ? { id: foundPokemon.id, name: foundPokemon.name, japaneseName: foundPokemon.japaneseName} : null;
}
