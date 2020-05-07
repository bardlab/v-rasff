import{_ as e,a as i,i as a,s as o,b as n,S as t,m as r,t as l,p as c,q as s,u,f as h,c as d,y as m,z as p,o as f,v as y,x as b,A as g,W as v,B as x,C as z,D as k,d as w,n as E,E as j,h as q,j as _,k as D,l as R}from"./client.26384291.js";var I={deterioration:0,mushroom:1,"health risk":2,vitamin:3,parasite:4,microbiological:5,fungus:6,"animal products":7,expiry:8,supplement:9,toxin:10,processing:11,virus:12,"plant growth regulator":13,"organic contaminants":14,documents:15,pharmaceuticals:16,hormone:17,vegetables:18,ingredients:19,other:20,"abnormal state":21,pesticide:22,"foreign bodies":23,"food additives":24,"inorganic contaminants":25,zeolite:26,"antibiotics and antimicrobials":27,eukaryota:28,bacteria:29};function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e,i,a){var o=e.slice();return o[6]=i[a],o}function P(e){var i,a,o,n=e[6]+"";return{c:function(){i=r("option"),a=l(n),this.h()},l:function(e){i=c(e,"OPTION",{value:!0});var o=s(i);a=u(o,n),o.forEach(h),this.h()},h:function(){i.__value=o=e[6],i.value=i.__value},m:function(e,o){d(e,i,o),m(i,a)},p:function(e,t){2&t&&n!==(n=e[6]+"")&&p(a,n),2&t&&o!==(o=e[6])&&(i.__value=o),i.value=i.__value},d:function(e){e&&h(i)}}}function S(e){for(var i,a,o,n,t,q,_,D,R,I,C,S=e[1],T=[],H=0;H<S.length;H+=1)T[H]=P(O(e,S,H));return{c:function(){i=r("div"),a=r("div"),o=r("button"),n=r("p"),t=l("Click to display"),q=f(),_=r("h1"),D=l(e[2]),R=f(),I=r("select");for(var c=0;c<T.length;c+=1)T[c].c();this.h()},l:function(r){i=c(r,"DIV",{class:!0});var l=s(i);a=c(l,"DIV",{class:!0});var d=s(a);o=c(d,"BUTTON",{class:!0});var m=s(o);n=c(m,"P",{});var p=s(n);t=u(p,"Click to display"),p.forEach(h),q=y(m),_=c(m,"H1",{});var f=s(_);D=u(f,e[2]),f.forEach(h),m.forEach(h),R=y(d),I=c(d,"SELECT",{class:!0});for(var b=s(I),g=0;g<T.length;g+=1)T[g].l(b);b.forEach(h),d.forEach(h),l.forEach(h),this.h()},h:function(){b(o,"class","itemName svelte-1m29vdz"),b(I,"class","svelte-1m29vdz"),void 0===e[2]&&g((function(){return e[5].call(I)})),b(a,"class","container svelte-1m29vdz"),b(i,"class","wrapper svelte-1m29vdz"),v(i,"hidden",e[0])},m:function(r,l,c){d(r,i,l),m(i,a),m(a,o),m(o,n),m(n,t),m(o,q),m(o,_),m(_,D),m(a,R),m(a,I);for(var s=0;s<T.length;s+=1)T[s].m(I,null);x(I,e[2]),c&&z(C),C=[k(o,"click",e[3]),k(I,"change",e[5])]},p:function(e,a){var o=w(a,1)[0];if(4&o&&p(D,e[2]),2&o){var n;for(S=e[1],n=0;n<S.length;n+=1){var t=O(e,S,n);T[n]?T[n].p(t,o):(T[n]=P(t),T[n].c(),T[n].m(I,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=S.length}4&o&&x(I,e[2]),1&o&&v(i,"hidden",e[0])},i:E,o:E,d:function(e){e&&h(i),j(T,e),z(C)}}}function T(e,i,a){var o,n=q(),t=i.items,r=i.isHidden,l=void 0===r||r;return e.$set=function(e){"items"in e&&a(1,t=e.items),"isHidden"in e&&a(0,l=e.isHidden)},[l,t,o,function(){console.log("firing event"),a(0,l=!0),n("message",{text:o})},n,function(){o=R(this),a(2,o),a(1,t)}]}var H=function(r){e(s,t);var l,c=(l=s,function(){var e,i=_(l);if(C()){var a=_(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return D(this,e)});function s(e){var t;return i(this,s),t=c.call(this),a(n(t),e,T,S,o,{items:1,isHidden:0}),t}return s}(),V={deterioration:["outer coating coming off","corrosion","inner coating peeling off","deterioration","vacuum leakage","packaging","heat resistance","colour peeling off","material abrading","breakage","incorporation rate","rust"],mushroom:["phellinus linteus","coriolus versicolor","poisonous mushrooms","trametes versicolor"],"health risk":["risk of explosion","gas accumulation","food poisoning","carbon monoxide treatment","risk of mouth injury","risk of internal injuries","adverse reaction","risk of favism","risk of injuries","foodborne outbreak","suffocation risk","risk of physical injury","allergic reaction"],vitamin:["vitamin e","vitamin b1","vitamin b6","vitamin a","vitamin b9","vitamin d3","vitamin d","vitamins"],parasite:["anisakis","parasitic infestation","sarcocystis","dead parasites","trichinella","przhevalskiana silenus","mites","pennella genus","trichinella","nematodes"],microbiological:["histologic lesions","microbiological contamination"],fungus:["penicillium","t-2 toxin","lolitrem b","fungi","ht-2 toxin","ustilago maydis","fumonisins","moulds","claviceps purpurea","yeasts","paecilomyces variotii","cuitlacoche","citrinin","patulin","deoxynivalenol","monascus purpureus"],"animal products":["thyroid tissue","bone","mouse","animal skeleton","ruminant dna","bombyx mori","bee venom","lagocephalus","bee pollen","bovine protein","rats","faeces","muscle fibers","duck protein","hair of land animals","feather meal","larvae","unauthorised animal ingredients","animal protein","rat droppings","dead insect","spinal cord attached","insects","rodent","tetraodontidae"],expiry:["expiry date","use-by date","best before date exceeded","excessive shelf life"],supplement:["epigallocathechine gallate","hordenine","indole-3-carbinol","vinpocetine","molybdenum chelate","evodiamine","tetradecylthioacetic acid","amino acid chelate","5-hydroxytryptophan","higenamine","norcoclaurine","glycerylphosphorylcholine","citrulline malate","norvaline","gamma-aminobutyric acid"],toxin:["toxins","tetrodotoxin","yessotoxin","ochratoxin a","aflatoxins"],processing:["inadequate heat processing","incorrect temperature","temperature control","inadequate thermal processing","radioactivity","irradiation","rupture of the cold chain","radiation","thawed"],virus:["calicivirus","norovirus","hepatitis a","norovirus"],"plant growth regulator":["n6-benzyladenine"],"organic contaminants":["cocaine","aromatic amines","diesel oil","hydroxymethylfurfural","methylpropiophenone","nicotine","volatile organic","naphthalene","mustard gas","propylene glycol","xylene","biogenous amines","di-isononyl phthalate","piperonylbutoxide","benzalkonium chloride","acrylamide","detergent","trans fatty acids","aliphatic hydrocarbons","betaine","2-methyl-2-propanol","semicarbazide","2.4-diethyl thioxanthone","erucic acid","fast garnet","pyrrolizidine alkaloids","fulvic acid","2-methyl-4'-(methylthio)-2-morpholinopropiophenone","mineral oil","benzo(a)pyrene","3-monochlor-1,2-propanediol","di(2-propylheptyl) phthalate","benzimidazole","di(2-ethylhexyl) phthalate","nicotinic acid","tocotrienol","nitrosamines","melamine","linoleic acid","chloroform","isopropyl thioxanthone","polycyclic aromatic hydrocarbons","1,3-pentadiene","free gossypol","arginine","dibutyl phthalate","methanol","toluene","epoxidised soybean oil","dichloromethane","tetrachloroethene","formic acid","butanone","phytohaemagglutinin","brominated vegetable oil","diindolylmethane","polychlorobifenyls","dioxin","ethyl carbamate","diphenyl(2,4,6-trimethylbenzoyl)phosphine oxide","phenylalanine","glycidyl esters","d-ribose","cellulose acetate phtalate","lipoic acid"],documents:["unauthorised transit","poor traceability","unauthorised supplier","unauthorised import","illegal trade","attempt to illegally import","unauthorised placing on the market","illegal import","counterfeit","unauthorised novel food","absence of certified analytical report","traceability","non-classified production area","absence of common entry document","entry document","health certificate","fraud","unauthorised establishment","undeclared peanut","unauthorised operator","improper certified analytical report","suspicion of fraud","identification code","declaration","health mark"],pharmaceuticals:["sildenafil","cannabidiol","mephedrone","vardenafil","tadalafil","diclofenac","tryptamine","monacolin k","yohimbine","phenylbutazone","flufenamic acid","pangamic acid","benzocaine","doramectin","nicarbazin","pseudovardenafil","oxilofrine","ractopamine","amprolium","idebenone","ivermectin","scopolamine","n-acetylcysteine","phenethylamine","sulphaquinoxaline","atropine","dimethylsildenafil","agmatine sulphate","1,3-dimethylbutylamine","nor-acetildenafil","synephrine","closantel","flunixin","ephedrine","morphine","androstadien-3,17-dione","oxyphenylbutazone","toltrazuril","1,3-dimethylamylamine","zilpaterol","albendazole","tetrahydrocannabinol","2-amino-6-methylheptane","naproxen","diclazuril","clopidol","clenbuterol","sibutramine"],hormone:["guggulsterone","bisphenol a","histamine","melatonin","boldenone","stanozolol","3,5 diiodthyronin","dehydroepiandrosterone","diethylstilbestrol","zearalenone","progesterone","steroids","dexamethasone","ghrp-2","prednisolone","androstenedione","octopamine"],vegetables:["crotalaria","cuphea carthaginensis","jojoba","viscum coloratum","bulbus fritillariae cirrhosae","lepidium meyenii","sophora japanica","ragweed","symphytum officinalis","dendrobium nobile","phyllanthus emblica","chia seeds","eyryale ferox","solanum nigrum","aegeline","genetically modified corn","tonka beans","saw palmetto","evodia rutaecarpa","flos farfarae","toxic herbal extracts","epimedium","ephedra","asplenium scolopendrium","senna alexandrina","sida cordifolia","bacopa monnieri","aqua armeniacae","lotus leaf","cirsium oligophyllum","rosella extract","synsepalum dulcificum","eurycoma longifolia","mesona chinensis","rubus suavissimus","pueraria mirifica","abrus precatorius","pueraria mirifica","platostoma pallustre","crotalaria","gomphrena","canavalia gladiate","centella asiatica","salacia oblonga","perilla frutescens","cnidium monnieri","senecio vulgaris","unauthorised herbs","mucuna pruriens","smallanthus sonchifolius","illicium anisatum","rauwolfia","scutellaria","mulberry leaves","leontopodium alpinum","lilium brownii","cistanche deserticola","tongkat ali extract","terminalia chebula","desmodium gangeticum","yacon root","tribulus terrestris","cistus incanus","siraitia grosvenorii","dongling tea","cordyceps sinensis","rhizoma pinelliae preparatum","gymnema","ziziphus zizyphus","thorn-apple","vernonia amygdalina","radix adenophorae","psoralea corylifolia","kava kava","radix platycodonis","algae","chenopodium pallidicaule","hoodia gordonii","nelumbo nucifera","thorns","annona muricata","noni leaf","acacia rigidula","polygonum multiflorum","ocimum sanctum","butea superba","yohimbe bark extract","glechoma hederacea","areca catechu","jiaogulan tea","salvia hispanica","casearia sylvestris","hovenia dulcis","pine pollen","amaranthus cruentus","folium eriobotryae","colchicum autumnale","crateva religiosa","cissus quadrangularis","myrciaria","aconitum","radix polygalae","mesquite","garcinia cambogia","unauthorised genetically modified","bauhinia purpurea","sareptian mustard","ginseng","xilopia aethiopica"],ingredients:["traces of soy","traces of sesame","undeclared milk","undeclared soy","undeclared fish","undeclared colour","undeclared hazelnut","traces of hazelnut","undeclared pistachio","undeclared nuts","too high content of nutrients","undeclared barley","traces of mustard","stained seeds","traces of peanut","undeclared cashew nut","undeclared almond","traces of egg","carnitine","undeclared egg","undeclared sulphite","undeclared celery","undeclared gluten","traces of wheat","too high content of alcohol","traces of milk","too high molecular weight","undeclared shrimp","too high content","traces of almond","undeclared mustard","traces of fish","traces of cashew nut","undeclared wheat","undeclared sesame","too high content of sulphite","traces of gluten","undeclared shellfish","traces of celery","undeclared walnut","undeclared brazil nut","unauthorised ingredient","undeclared molluscs","unauthorised food additive","traces of shrimp","creatine chelate","undeclared lactose","undeclared macadamia nuts","smoke flavouring","possible contamination"],other:["overall migration","improper production","specified risk material","unfit for animal nutrition","unidentified substance","unfit for use as food contact material","withdrawal periods for veterinary medicines","incorrect labelling","improper seaming","coagulation","not suitable for heating","improper storage","tests not conducted","migration of","unsuitable means of transport","test not conducted","hygienic state","unpurified","insufficient checks","desiccative bag","unsuitable transport conditions","not suitable to contain food","incorrect pasteurization","fish particles","absence of labelling","unidentified colour","excessive humidity","incorrect dosage scoop","unfit for human consumption","insoluble impurities","improper shelf life studies","insufficient labelling","not withdrawn from the market","fermentation by-product"],"abnormal state":["adulteration","organoleptic characteristics","tampering","taste disturbance","spoilage","state of preservation","abnormal smell","abnormal colour","oxidation"],pesticide:["oxadixyl","methamidophos","phoxim","tau-fluvalinate","azoxystrobin","cyhalothrin","phosphine","chlorantraniliprole","tetramethrin","azinphos-methyl","cyromazine","pymetrozine","chlormequat","indoxacarb","amitraz","deltamethrin","anisatin","naphtalene","malathion","tebuconazole","oxytetracycline","pyridalyl","streptomycin","fipronil","fluazinam","thiophanate-methyl","coumaphos","diazinon","fenpropathrin","fenitrothion","mepiquat","carbendazim","phosalone","diniconazole","permethrin","raticide","strychnine","beta-asarone","pentachlorophenol","azaconazole","acephate","imazalil","triadimefon","methoxyfenozide","chlorfluazuron","fenarimol","thiacloprid","flusilazole","fenthion","myclobutanil","chlorothalonil","dicrotophos","pyraclostrobin","folpet","triazophos","bifenthrin","biphenyl","thiamethoxam","ethylene","methyl bromide","parathion-methyl","chlorpropham","dimethoate","abamectin","etoxazole","diafenthiuron","phosmet","carbofuran","clofentezine","imidacloprid","parathion","trifluralin","formetanate","cyproconazole","isoprothiolane","4-cpa","pesticide residues","lufenuron","isocarbophos","phenmedipham","tetradifon","hexaconazole","hexaflumuron","hexachlorobenzene","organophosphate","fenamiphos","dimethomorph","oxamyl","flonicamid","chlorpyrifos","linuron","profenofos","fluazifop-p","disulfoton","iprodione","cyfluthrin","fonofos","ethephon","orthophenylphenol","ethoprofos","prothiofos","spinosad","methiocarb","emamectin","propiconazole","phenthoate","propoxur","dichlorvos","chlorbufam","monocrotophos","captan","pirimicarb","oxydemeton-methyl","mirex","2,4-dinitrophenol","fluazifop-p","chlorfenapyr","spiromesifen","aldrin","dieldrin","tebufenpyrad","diflubenzuron","buprofezin","fenvalerate","procymidone","n,n-diethyl-meta-toluamide","butylbenzoate","pirimiphos-methyl","bromopropylate","tricyclazole","epn","2,4-d","trifloxystrobin","metamitron","dicofol","triadimenol","prometryn","thiodicarb","ethion","diphenylamine","glyphosate","quinalphos","isofenphos-methyl","pyridaben","fenamidone","ethoxyquin","ddt","fluopyram","dodine","trichlorfon","propargite","dinotefuran","anthraquinone","isoprocarb","sulphur","promecarb","propamocarb","aldicarb","acrinathrin","acetamiprid","difenoconazole","endosulfan","tolfenpyrad","methomyl","fluazifop-p-butyl","fosthiazate","omethoate","mandipropamid","heptachlor","hch","clothianidin","methoxychlor","carbaryl","flubendiamide","formaldehyde","dithiocarbamates","flupyradifuron","esfenvalerate","prochloraz","etofenprox","famoxadone","methidathion"],"foreign bodies":["glass","slug pellets","metal","wood","silica aerogel","stones","stainless steel","ferromagnetic particles","glass fragments","nails","sharp fragments","plastic","foreign body","foreign bodies","quartz","plastic fragments","mineral particles","soil","black particles"],"food additives":["e 216","e 128","e 954","e 104","berberine","benzophenone","e 637","e 162","methyl yellow","e 450","e 124","oil orange","e 143","toluidine red","l-lysine","theobromine","aspartate","e 927","lactoprotein","victoria pure blue","e 153","beta-alanine","reactive red 195","basic red 46","e 965","e 218","e 955","morpholine","phenolphthalein","e 203","e 912","e 407","curcumin","gardenia yellow","rhodamine b","e 621","e 950","e 260","e 316","citral","bergenin","aloin","e 315","sudan 4","e 210","e 123","e 425","e 120","e 330","e 363","rose bengal","caffeine","e 952","e 321","e 202","crystal violet","e 160","e 102","orange ii","e 452","e 127","hydroxycitric acid","e 926","butter yellow","e 110","theacrine","e 150","erythrosine","glucosamine","e 951","e 155","berberin","sudan 1","raspberry ketone","e 365","dehydroacetic acid","e 129","e 250","papain","e 211","e 280","capsaicin","e 133","rhodamine b","citrate","e 928","thujone","aspartic acid","e 214","e 1421","e 152","astaxanthin","e 586","e 200","e 265","e 122","e 640","coumarin","e 151"],"inorganic contaminants":["sulphite","cyanuric acid","chlorate","lithium","nitrite","nickel","ferric","sodium chlorite","nitrate","tin","iron","leucomalachite","chromium","lead","carbonate","mercury","silver","cyanide","aluminium","strontium","fluorine","phosphate","volatile basic nitrogen","malachite","cadmium","copper","bromate","minerals","alkalinity","acidity","germanium","hydrocyanic acid","peroxide","selenium","zinc","fluoride","vanadyl","lye","arsenic","cobalt","hydrogen peroxide","boron","peroxide value","antimony","iodine","vanadium","gold"],zeolite:["clinoptilolite","zeolite"],"antibiotics and antimicrobials":["penicillin","cloxacillin","sulfamethoxazole","trimethoprim","didecyldimethylammonium chloride","sulfonamide","sulfamethazine","kanamycin","antibiotics","bacitracin","amoxicillin","neomycin","ofloxacin","nitrofuran","benzethonium chloride","dihydrostreptomycin","tulathromycin","lasalocid","tetracycline","norfloxacin","salicylic acid","narasin","lincomycin","chlortetracycline","sulfadiazine","levamisole","chloramphenicol","cefalexin","doxycycline","maduramycin","metronidazole","sulfadimethoxine","tylosin","sulfathiazole","azithromycin","salinomycin","sulfadimidine"],eukaryota:["ciguatera poisoning"],bacteria:["echinococcus granulosus","shigella sonnei","bacterial contamination","aerobic plate count","staphylococcal enterotoxin","aerobic mesophiles","enterococcus","vibrio vulnificus","vibrio","coliforms","aureobasidium","bacterial growth","streptococci","vibrio alginolyticus","botulinum","escherichia coli","salmonella","brucella","listeria","enterobacteriaceae","vibrio cholerae","clostridium","yersinia enterocolitica","vibrio parahaemolyticus","bacterial protein","high aerobic plate count","arcanobacterium pyogenes","campylobacter","cronobacter sakazakii","clostridium sporogenes","bacterial inhibitor","high bacterial count","bacillus cereus","staphylococcus","mycobacterium tuberculosis","clostridium perfringens","pseudomonas","faecal streptococci","bacillus"]};function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function B(e,i,a){var o=e.slice();return o[3]=i[a],o}function L(e,i,a){var o=e.slice();return o[6]=i[a],o}function A(e){var i,a,o=e[6]+"";return{c:function(){i=r("option"),a=l(o),this.h()},l:function(e){i=c(e,"OPTION",{class:!0,value:!0});var n=s(i);a=u(n,o),n.forEach(h),this.h()},h:function(){b(i,"class","option"),i.__value=e[6],i.value=i.__value},m:function(e,o){d(e,i,o),m(i,a)},p:E,d:function(e){e&&h(i)}}}function U(e){var i,a,o=e[3]+"";return{c:function(){i=r("p"),a=l(o),this.h()},l:function(e){i=c(e,"P",{class:!0});var n=s(i);a=u(n,o),n.forEach(h),this.h()},h:function(){b(i,"class","subCatItem svelte-s2oc8j")},m:function(e,o){d(e,i,o),m(i,a)},p:function(e,i){1&i&&o!==(o=e[3]+"")&&p(a,o)},d:function(e){e&&h(i)}}}function W(e){for(var i,a,o,n,t,l,u=e[1],p=[],v=0;v<u.length;v+=1)p[v]=A(L(e,u,v));for(var z=V[e[0]],q=[],_=0;_<z.length;_+=1)q[_]=U(B(e,z,_));return{c:function(){i=r("div"),a=r("div"),o=r("select");for(var e=0;e<p.length;e+=1)p[e].c();n=f(),t=r("div");for(var l=0;l<q.length;l+=1)q[l].c();this.h()},l:function(e){i=c(e,"DIV",{class:!0});var r=s(i);a=c(r,"DIV",{class:!0});var l=s(a);o=c(l,"SELECT",{class:!0});for(var u=s(o),d=0;d<p.length;d+=1)p[d].l(u);u.forEach(h),l.forEach(h),n=y(r),t=c(r,"DIV",{class:!0});for(var m=s(t),f=0;f<q.length;f+=1)q[f].l(m);m.forEach(h),r.forEach(h),this.h()},h:function(){b(o,"class","svelte-s2oc8j"),void 0===e[0]&&g((function(){return e[2].call(o)})),b(a,"class","subcategories svelte-s2oc8j"),b(t,"class","subcategoryItems svelte-s2oc8j"),b(i,"class","container svelte-s2oc8j")},m:function(r,c,s){d(r,i,c),m(i,a),m(a,o);for(var u=0;u<p.length;u+=1)p[u].m(o,null);x(o,e[0]),m(i,n),m(i,t);for(var h=0;h<q.length;h+=1)q[h].m(t,null);s&&l(),l=k(o,"change",e[2])},p:function(e,i){var a=w(i,1)[0];if(2&a){var n;for(u=e[1],n=0;n<u.length;n+=1){var r=L(e,u,n);p[n]?p[n].p(r,a):(p[n]=A(r),p[n].c(),p[n].m(o,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=u.length}if(1&a&&x(o,e[0]),1&a){var l;for(z=V[e[0]],l=0;l<z.length;l+=1){var c=B(e,z,l);q[l]?q[l].p(c,a):(q[l]=U(c),q[l].c(),q[l].m(t,null))}for(;l<q.length;l+=1)q[l].d(1);q.length=z.length}},i:E,o:E,d:function(e){e&&h(i),j(p,e),j(q,e),l()}}}function $(e,i,a){var o=Object.keys(V),n="bacteria";return[n,o,function(){n=R(this),a(0,n),a(1,o)}]}var F=function(r){e(s,t);var l,c=(l=s,function(){var e,i=_(l);if(N()){var a=_(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return D(this,e)});function s(e){var t;return i(this,s),t=c.call(this),a(n(t),e,$,W,o,{}),t}return s}();export{H as C,F as S,I as i};
