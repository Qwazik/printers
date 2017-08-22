/**
 * Created by treible on 03.05.2016.
 */
// console.log('load kyo.config.js');
require.config({
    baseUrl: '//cdn.kyostatics.net/static/js/',
    paths: {
        jquery: 'lib/jquery.min',
        jqueryMig: 'lib/jquery-migrate.min',
        bootstrap: 'bootstrap/bootstrap.min',
        modernizr: 'lib/modernizr.min',
        modernizrCustom: 'lib/modernizr.custom.min',
        360: 'plugin/360degree/360',
        datatables: 'plugin/datatables/jquery.dataTables.min',
        datatablesColVis: 'plugin/datatables/dataTables.colVis.min',
        datatablesTools: 'plugin/datatables/dataTables.tableTools.min',
        datatablesBootstrap: 'plugin/datatables/dataTables.bootstrap.min',
        datatablesresponsiv: 'plugin/datatable-responsive/datatables.responsive.min',
        datepicker: 'plugin/bootstrap-datepicker/bootstrap-datepicker.min',
        domReady: 'lib/domReady',
        dygraph: 'plugin/dygraphs/dygraph-combined.min',
        fileinput: 'plugin/bootstrap-fileinput/bootstrap.file-input',
        fileupload: 'plugin/jquery-fileupload/jquery.fileupload',
        globaltracking: 'plugin/google/globaltracking',
        iframeResizer: 'plugin/iframeresizer/iframeResizer.min',
        imagecropper: 'plugin/bootstrap-image-cropper/cropper.min',
        jqueryCookie: 'plugin/jquery-cookie/jquery-cookie',
        jqueryIframeTransport: 'plugin/jquery-iframe-transport/jquery.iframe-transport',
        jqueryUI: 'lib/jquery-ui.min',
        jqueryUIwidget: 'lib/jquery.ui.widget',
        jsCookie: 'plugin/js-cookie/js.cookie.min',
        jwplayer: 'plugin/jwplayer/jwplayer.min',
        knob: 'plugin/knob/jquery.knob.min',
        nestable: 'plugin/jquery-nestable/jquery.nestable.min',
        numberformat: 'cq/kyocera/component/costsavingcalculator/number_format',
        morris: 'plugin/morris/morris.min',
        multiselect: 'plugin/bootstrap-multiselect/bootstrap-multiselect.min',
        pwstrength: 'plugin/bootstrap-password-strength/pwstrength-bootstrap.min',
        //pwstrength: 'plugin/bootstrap-password-strength/pwstrength-bootstrap-1.2.7.min',
        raphael: 'plugin/raphael/raphael.min',
        swfobject: 'swfobject_source',
        royalslider: 'plugin/royalslider/jquery.royalslider.min',
        vectormap: 'plugin/vectormap/jquery-jvectormap-1.2.2.min',
        wizard : 'plugin/wizard/wizard',
        xeditable : 'plugin/x-editable/x-editable.min',

        //cq components/templates
        brc: 'cq/kyocera/component/businessrelatedcontent/brc',
        cqbasic: 'cq/kyocera/cq_basic',
        consumableSearchLbl: 'cq/kyocera/component/consumablesearch/consumablesearch.min',
        costsavingcalculator: 'cq/kyocera/component/costsavingcalculator/costsavingcalculator.min',
        downloadCenterLbl: 'cq/kyocera/component/downloadcenter/downloadcenter.min',
        homepageBottomLbl: 'cq/kyocera/component/homepagebottom/homepagebottom.min',
        infocenter: 'cq/kyocera/component/infocenter.min',
        productOverviewLbl: 'cq/kyocera/component/productoverview/productoverview',
        productsearch: 'cq/kyocera/component/productsearch/productsearch.min',
        sparkline: 'plugin/sparkline/jquery.sparkline.min',
        stageBannerLbl: 'cq/kyocera/component/stagebanner/stagebanner.min',
        tagsinput: 'plugin/bootstrap-tags/bootstrap-tagsinput.min',

        consumableTemplateLbl: 'cq/kyocera/templates/consumable/consumable.min',
        productTemplateLbl: 'cq/kyocera/templates/product/product.min'
    },
    waitSeconds: 0,

    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'brc': ['jquery'],
        'consumableSearchLbl': ['jquery'],
        'cqbasic': ['jquery'],
        'datatables': {
            deps: ['jquery'],
            exports: 'plugin/datatables/jquery.dataTables.min'
        },
        'datatablesresponsiv': ['bootstrap'],
        'datatablesBootstrap': ['bootstrap', 'datatables'],
        'datatablesColVis': ['datatables'],
        'datatablesTools': ['datatables'],
        'downloadCenterLbl':{
            deps: ['jquery'],
            init: function() {
                initDownloadCenter();
            }
        },
        'dygraph': ['jquery'],
        'easyzoom': ['jquery'],
        'fileinput': ['bootstrap'],
        'fileupload': {
            deps: ['jquery', 'jqueryUI', 'jqueryIframeTransport'],
            exports: 'plugin/jquery-fileupload/jquery.fileupload'
        },
        'homepageBottomLbl': ['jquery', 'royalslider'],
        'imagecropper': {
            deps: ['jquery'],
            exports: 'plugin/bootstrap-image-cropper/cropper.min'
        },
        'jqueryCookie': ['jquery'],
        'jqueryMig': ['jquery'],
        'jqueryUI': ['jquery'],
        'jwplayer': ['jquery'],
        'knob': ['jquery'],
        'kyo': ['jquery', 'bootstrap'],
        'kyo.base': ['jquery', 'bootstrap','kyo.sameheight'],
        'kyo.contact': ['jquery'],
        'kyo.cookie': ['jquery'],
        'kyo.dock': {
            deps: ['bootstrap'],
            init: function() {
                kyo.dock.init();
            }
        },
        'kyo.flexnav': {
            deps: ['jquery'],
            init: function() {
                kyo.flexnav.init();
            }
        },
        'kyo.linked': {
            deps: ['jquery'],
            init: function() {
                kyo.linked.init();
            }
        },
        'kyo.mobile-table': ['jquery'],
        'kyo.nav': {
            deps: ['jquery'],
            init: function() {
                kyo.nav.init();
            }
        },
        'kyo.productfilter': {
            deps: ['jquery', 'kyo.base'],
            init: function() {
                kyo.productfilter.init();
            }
        },
        'kyo.productcompare': {
            deps: ['jquery', 'kyo.base'],
            init: function() {
                kyo.productcompare.init();
            }
        },
        'kyo.rs': {
            deps: ['jquery', 'royalslider'],
            init: function() {
                kyo.rs.init();
            }
        },
        'kyo.sameheight': ['jquery'],
        'kyo.scrolltop': {
            deps: ['jquery'],
            init: function() {
                kyo.scrollTop.init();
            }
        },
        'kyo.sitesearch': ['jquery'],
        'kyo.tabload': {
            deps: ['kyo.base'],
            init: function() {
                kyo.tabload.init();
            }
        },
        'kyo.video': ['jquery', 'jwplayer'],
        'lib/jquery-ui.min': ['jquery'],
        'multiselect': ['bootstrap'],
        'royalslider': ['jquery'],
        'stageBannerLbl': ['jquery', 'royalslider'],
        'tagsinput': ['bootstrap'],
        'vectormap': ['jquery'],
        '360': ['jquery','jqueryMig'],
        'plugin/bootstrap-datepicker/bootstrap-datepicker.min': ['bootstrap'],
        'datepicker': ['bootstrap'],
        'plugin/bootstrap-fileinput/bootstrap.file-input': ['bootstrap'],
        'plugin/bootstrap-multiselect/bootstrap-multiselect.min': ['bootstrap'],
        'plugin/bootstrap-password-strength/pwstrength-bootstrap-1.2.7.min': ['bootstrap'],
        'plugin/bootstrap-password-strength/pwstrength-bootstrap.min': ['bootstrap'],
        'plugin/bootstrap-tags/bootstrap-tagsinput.min': ['bootstrap'],
        'productOverviewLbl': ['jquery'],
        'pwstrength': ['bootstrap'],
        'iframeResizer': ['jquery'],
        //'plugin/iframeresizer/iframeResizer.min': ['jquery'],
        'plugin/iframeresizer/iframeResizer.contentWindow.min': ['jquery'],
        'plugin/jquery-iframe-transport/jquery.iframe-transport': ['jquery'],
        //'plugin/jquery-cookie/jquery-cookie': ['jquery'],
        'nestable': ['jquery'],
        'morris': ['jquery', 'raphael'],
        'raphael': ['jquery'],
        'sparkline': ['jquery'],
        'plugin/typeahead/typeahead.bundle.min': {
            deps: ['jquery'],
            exports: 'Bloodhound'
        },
        'plugin/vectormap/jquery-jvectormap-ch-mill-en': ['vectormap'],
        'wizard': ['jquery'],
        'xeditable': ['jquery'],

        'productTemplateLbl': ['jquery', 'royalslider'],
        'consumableTemplateLbl': ['jquery', 'royalslider']
    },
    deps: ['jquery', 'bootstrap', 'modernizrCustom', 'cqbasic', 'plugin/typeahead/typeahead.bundle.min', 'kyo.flexnav', 'kyo.scrolltop', 'kyo.mobile-table'],
    callback: function ($) {

        if (!navigator.userAgent.match(/msie/i) ){
            kyo.mobiletable.init();
        }

        // TYPEAHEAD for search
        var obj_suggest = new Bloodhound({
            datumTokenizer: function (datum) {
                return Bloodhound.tokenizers.whitespace(datum.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: '//ac.kyocera.eu/de_de/standard_fulltext/ac.html?term=%QUERY',
                filter: function (suggests) {
                    return $.map(suggests.suggestions, function (suggest) {
                        return {
                            value: suggest.value,
                            desc: '<i class="fa fa-print"></i> ' + suggest.value
                        };
                    });
                },
                ajax: {
                    dataType: "jsonp"
                }
            }
        });

        obj_suggest.initialize();

        $('#searchbox').typeahead(
            {minLength: 3, highlight: false, hint: false},
            {name: 'products',displayKey: 'value',source: obj_suggest.ttAdapter()}
        );

        $('#searchTermPage').typeahead(
            {minLength: 3,highlight: false,hint: false},
            {name: 'products',displayKey: 'value',source: obj_suggest.ttAdapter()}
        );
        // end TYPEAHEAD

        $(".dd a").on("mousedown", function(event) {
            event.preventDefault();
            return false;
        });

        $(".dd a").on("click", function(event) {
            event.preventDefault();
            window.location = $(this).attr("href");
            return false;
        });

        window.is_touch = Modernizr.touch;
        window.is_chrome = window.chrome;

    }
});