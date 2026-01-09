// Extended CSS Initialization
(() => {
    try {
        new window.ExtendedCss({
            styleSheet: String.raw`.video-info > div.video-link:has(> b > a[href][target="_blank"][rel="sponsored"]), a[href^="https://promosi."][target="_blank"]:has(img), [href*="//niagahoster.co.id" i][href*="?REFERRALCODE" i]:has(img), [href^="https://aff.gramedia.com/"]:has(img), [href^="https://atid.me/go/"]:has(img), [href^="https://collaborator.pro?ref="]:has(img), [href^="https://hub.jogjaweb.co.id/aff.php?"]:has(img), [href^="https://id.komunitasbos.com/aff/"]:has(img), [href^="https://idwebhost.com/aff/"]:has(img), [href^="https://indodax.com/ref/"]:has(img), [href^="https://member.jagoanhosting.com/aff.php"]:has(img), [href^="https://member.thebrandmasterclass.id/aff/"]:has(img), [href^="https://monetag.com/?ref_id="]:has(img), [href^="https://my.domainesia.com/ref.php"]:has(img), [href^="https://my.hawkhost.com/aff.php"]:has(img), [href^="https://panel.niagahoster.co.id/ref/"]:has(img), [href^="https://publishers.adsterra.com/referral/"]:has(img), [href^="https://rajabacklink.com/refferal.php?q="]:has(img), [href^="https://referral.ajaib.co.id/"]:has(img), [href^="https://sugeng.id/?ref="]:has(img), [href^="https://triv.co.id/aff/"]:has(img), [href^="https://www.clickadu.com/?rfd="]:has(img), [href^="https://www.dewaweb.com/aff.php?aff="]:has(img), [href^="https://www.domainesia.com/?aff="]:has(img), [href^="https://www.indowebsite.co.id/web-hosting/?id="]:has(img), [href^="https://www.oketheme.com/members/aff/go/"]:has(img), [href^="https://www.tokocrypto.com/account/signup?ref="]:has(img), a[href^="https://links.intellifluence.com/"]:has(img), [href*="https://campaign.alfagift.id/"]:has(img), [href="https://id.seedbacklink.com/"]:has(img), [href^="https://adv.co.id"]:has(img), [href^="https://blogpartner.id"]:has(img), [href^="https://nanovest.go.link/"]:has(img), [href^="https://promosi.qwords.com/"]:has(img), [href^="https://toffee.id/growth?"]:has(img), [href^="https://www.blibli.com/promosi/"]:has(img), img[src^="https://assets.ayobandung.com/"] + div[style="position: relative;"]:has(> #in_image > a[onclick="closeinImage()"]), img[src^="https://static.promediateknologi.id"] + div[style="position: relative;"]:has(> #in_image > a[onclick="closeinImage()"]), [href*="//bloggercrony.com"]:has(img), [href*="//bloggerperempuan.com"]:has(img), [href*="//emak2blogger.com"]:has(img), [href*="//s.id/EmakBlogger"]:has(img), a[alt="gitarpoker" i]:has(img), a[alt="gitartogel" i]:has(img), a[alt="jayapoker" i]:has(img), a[alt="pokerboya" i]:has(img), a[alt="totojitu" i]:has(img), a[title="8togel" i]:has(img), a[title="bandar36" i]:has(img), a[title="dewacasino" i]:has(img){display: none !important;}a[title="dewacuan" i]:has(img), a[title="gitarpoker" i]:has(img), a[title="hokidewa" i]:has(img), a[title="jayapoker" i]:has(img), a[title="klikhoki" i]:has(img), a[title="macaudewa" i]:has(img), a[title="pokerboya" i]:has(img), a[title="totojitu" i]:has(img), [href*="redirect388herosafest.com/register/"]:has(> img), [href*="redirectbaik777safest.com/register/"]:has(> img), [href*="redirectbandarxlsafest.com/register/"]:has(> img), [href*="redirectbisnis4dsafest.com/register/"]:has(> img), [href*="redirectenakslotsafest.com/register/"]:has(> img), [href*="redirectmpo0110safest.com/register/"]:has(> img), [href*="redirectolx101safest.com/register/"]:has(> img), [href^="https://sokuja.id/"][rel*="nofollow"]:has(> img), .nf-o-moduleblock-module:has(> .nf-o-annonse), div.nf-js-scrollable-item:not(:has(*)), .row > div.colVideoList:has(> div.video-elem > a[target="_blank"]), body[onresize="stopDebugger()"][onbeforecopy="return!1"] > div#root div:has(> img[src$=".gif"]){display: none !important;}`
        }).apply();
    } catch (e) {
        console.error(e)
    }
})();

// Application Installed Check
(() => {
    window.isApplicationInstalled = true;
    window.dispatchEvent(new Event("application-installed"));
    document.querySelector("#cross-promotion-container-fmdtdx")?.remove();
})();

// AdBlock Detection Bypass
(() => {
    'use strict';
    var t = function(t, e) {
        var n, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            },
            c = Object.create(('function' == typeof Iterator ? Iterator : Object).prototype);
        return c.next = i(0), c.throw = i(1), c.return = i(2), 'function' == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function i(i) {
            return function(l) {
                return function(i) {
                    if (n) throw new TypeError('Generator is already executing.');
                    for (; c && (c = 0, i[0] && (a = 0)), a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], o = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, l])
            }
        }
    };
    (function(t, e, n, o) {
        new(n || (n = Promise))((function(r, a) {
            function c(t) {
                try {
                    l(o.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function i(t) {
                try {
                    l(o.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function l(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(c, i)
            }
            l((o = o.apply(t, e || [])).next())
        }))
    })(void 0, void 0, void 0, (function() {
        return t(this, (function(t) {
            switch (t.label) {
                case 0:
                    return [4, fetch(''.concat('https://local.adblock360.com', '/').concat('set-current-domain'), {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        credentials: 'include',
                        body: JSON.stringify({
                            domain: window.location.hostname.replace(/^www\./, '')
                        })
                    })];
                case 1:
                    return t.sent(), [2]
            }
        }))
    }))
})();

// Mock Data
const mockData = {
    categories: [{
        name: "Market Data & Real-Time Feeds",
        iconPath: "M3 3V21H21V19H5V3H3M7 17H9V10H7V17M11 17H13V7H11V17M15 17H17V13H15V17M19 17H21V9H19V17Z",
        avgRating: 9.4,
        sources: [{
            name: "TradingView",
            url: "https://www.tradingview.com",
            tier: "Elite",
            rating: 9.8,
            description: "Advanced charting, Pine Script, real-time data, global markets coverage with institutional tools."
        }, {
            name: "Yahoo Finance",
            url: "https://finance.yahoo.com",
            tier: "Elite",
            rating: 9.5,
            description: "Comprehensive equities, options chains, fundamentals, earnings data with API access."
        }, {
            name: "Google Finance",
            url: "https://www.google.com/finance",
            tier: "Professional",
            rating: 9.2,
            description: "Clean market data interface with portfolio tracking and news integration."
        }, {
            name: "Investing.com",
            url: "https://www.investing.com",
            tier: "Professional",
            rating: 9.4,
            description: "Global markets, economic calendar, technical analysis tools, comprehensive coverage."
        }, {
            name: "MarketWatch",
            url: "https://www.marketwatch.com",
            tier: "Professional",
            rating: 9.1,
            description: "Real-time market data, news, and comprehensive market coverage with Dow Jones quality."
        }, {
            name: "Koyfin",
            url: "https://www.koyfin.com",
            tier: "Elite",
            rating: 9.7,
            description: "Professional-grade dashboards, equity screens, institutional data visualization platform."
        }, {
            name: "Finviz",
            url: "https://finviz.com",
            tier: "Elite",
            rating: 9.6,
            description: "Advanced stock screener, heat maps, insider trading data, elite visualization."
        }, {
            name: "StockAnalysis",
            url: "https://stockanalysis.com",
            tier: "Professional",
            rating: 9.3,
            description: "In-depth financial statements, ratios, and valuation metrics with clean interface."
        }, {
            name: "Stooq",
            url: "https://stooq.com",
            tier: "Professional",
            rating: 9.0,
            description: "Free EOD & intraday CSV downloads, global markets, futures data for quants."
        }, {
            name: "BarChart",
            url: "https://www.barchart.com",
            tier: "Professional",
            rating: 8.9,
            description: "Futures, commodities, options flow with advanced technical indicators."
        }, {
            name: "MacroMicro",
            url: "https://en.macromicro.me/",
            tier: "Elite",
            rating: 9.4,
            description: "Global macro indicators with beautiful visualizations and correlation analysis."
        }, {
            name: "TradingEconomics Charts",
            url: "https://tradingeconomics.com/charts",
            tier: "Professional",
            rating: 8.8,
            description: "Macro indicators and asset price visualization with forecasting models."
        }, {
            name: "Fintel",
            url: "https://fintel.io",
            tier: "Elite",
            rating: 9.3,
            description: "Institutional holdings, insider trading, hedge fund tracking with detailed analytics."
        }, {
            name: "StockCharts",
            url: "https://stockcharts.com",
            tier: "Elite",
            rating: 9.2,
            description: "Professional technical analysis, charting tools, market indicators library."
        }, {
            name: "TrendSpider",
            url: "https://www.trendspider.com",
            tier: "Elite",
            rating: 9.1,
            description: "Automated technical analysis, pattern recognition, algorithmic charting."
        }, {
            name: "ChartMill",
            url: "https://www.chartmill.com",
            tier: "Professional",
            rating: 8.8,
            description: "Stock screening, technical analysis, systematic trading signals."
        }, {
            name: "Stockpile",
            url: "https://www.stockpile.com",
            tier: "Elite",
            rating: 9.4,
            description: "Institutional-grade research platform with advanced analytics and screening tools."
        }, {
            name: "Benzinga Pro",
            url: "https://pro.benzinga.com",
            tier: "Elite",
            rating: 9.3,
            description: "Real-time news flow, earnings calendar, FDA calendar, insider trading alerts."
        }, {
            name: "Ortex",
            url: "https://www.ortex.com",
            tier: "Elite",
            rating: 9.5,
            description: "Short interest data, institutional holdings, real-time analytics for professionals."
        }]
    }, {
        name: "Institutional APIs & Data Feeds",
        iconPath: "M4 1V5H5V4H6V5H7V4H8V5H9V4H10V5H11V4H12V5H20V4H21V3H4V1M3 6V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V6H3Z",
        avgRating: 9.4,
        sources: [{
            name: "Alpha Vantage",
            url: "https://www.alphavantage.co",
            tier: "Elite",
            rating: 9.8,
            description: "Premium API with real-time & historical data, technical indicators, fundamental data."
        }, {
            name: "Polygon.io",
            url: "https://polygon.io",
            tier: "Elite",
            rating: 9.7,
            description: "Real-time market data, options flow, institutional-grade APIs with tick data."
        }, {
            name: "Finnhub",
            url: "https://finnhub.io",
            tier: "Elite",
            rating: 9.6,
            description: "Stock API with earnings, news sentiment, insider trades, IPO calendar."
        }, {
            name: "Financial Modeling Prep (FMP)",
            url: "https://financialmodelingprep.com",
            tier: "Elite",
            rating: 9.5,
            description: "Financial statements, DCF models, ratios, institutional data with Excel exports."
        }, {
            name: "Quandl / Nasdaq Data Link",
            url: "https://data.nasdaq.com",
            tier: "Elite",
            rating: 9.8,
            description: "Alternative datasets, economic indicators, institutional research data platform."
        }, {
            name: "Tiingo",
            url: "https://www.tiingo.com",
            tier: "Elite",
            rating: 9.4,
            description: "High-quality price feeds, news API, crypto data with institutional accuracy."
        }, {
            name: "IEX Cloud",
            url: "https://iexcloud.io",
            tier: "Elite",
            rating: 9.3,
            description: "US equity data, real-time prices, market statistics API with transparency."
        }, {
            name: "Databento",
            url: "https://databento.com",
            tier: "Elite",
            rating: 9.6,
            description: "Institutional tick data, order book depth, low-latency feeds for professionals."
        }, {
            name: "EOD Historical Data",
            url: "https://eodhistoricaldata.com",
            tier: "Elite",
            rating: 9.4,
            description: "Global market data, fundamentals, options, bonds with comprehensive coverage."
        }, {
            name: "Twelve Data",
            url: "https://twelvedata.com",
            tier: "Professional",
            rating: 9.2,
            description: "Real-time & historical data for stocks, forex, crypto with advanced analytics."
        }, {
            name: "MarketStack",
            url: "https://marketstack.com",
            tier: "Professional",
            rating: 8.9,
            description: "Global stock market data API covering 70+ exchanges worldwide."
        }, {
            name: "OpenFIGI",
            url: "https://www.openfigi.com",
            tier: "Elite",
            rating: 9.5,
            description: "Bloomberg's FIGI symbology mapping service - institutional standard."
        }, {
            name: "yfinance",
            url: "https://pypi.org/project/yfinance/",
            tier: "Professional",
            rating: 9.1,
            description: "Most popular Python library for Yahoo Finance API access."
        }, {
            name: "Intrinio",
            url: "https://intrinio.com",
            tier: "Elite",
            rating: 9.3,
            description: "Financial data API with real-time feeds and fundamental analysis tools."
        }, {
            name: "Amberdata",
            url: "https://www.amberdata.io/",
            tier: "Elite",
            rating: 9.5,
            description: "Institutional-grade digital asset data, blockchain network data, and DeFi depth APIs."
        }]
    }, {
        name: "Central Banks & Economic Data",
        iconPath: "M5 6H23V8H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V8H1V6H5M12 2L14 4H20V6H4V4H10L12 2M5 8V19H19V8H5Z",
        avgRating: 9.5,
        sources: [{
            name: "FRED (Federal Reserve Economic Data)",
            url: "https://fred.stlouisfed.org",
            tier: "Elite",
            rating: 10.0,
            description: "The gold standard - 800,000+ economic time series from Federal Reserve St. Louis."
        }, {
            name: "European Central Bank (ECB)",
            url: "https://www.ecb.europa.eu/stats/html/index.en.html",
            tier: "Elite",
            rating: 9.8,
            description: "Eurozone monetary policy, banking statistics, comprehensive economic indicators."
        }, {
            name: "Bank of England",
            url: "https://www.bankofengland.co.uk/statistics",
            tier: "Elite",
            rating: 9.7,
            description: "UK monetary policy, inflation data, financial stability metrics."
        }, {
            name: "Bank of Japan",
            url: "https://www.boj.or.jp/en/statistics/index.htm",
            tier: "Elite",
            rating: 9.6,
            description: "Japanese economic statistics, money supply, interest rates data."
        }, {
            name: "OECD Data",
            url: "https://data.oecd.org",
            tier: "Elite",
            rating: 9.8,
            description: "Global economic datasets, country comparisons, development indicators."
        }, {
            name: "World Bank Open Data",
            url: "https://data.worldbank.org",
            tier: "Elite",
            rating: 9.7,
            description: "Global development data, poverty statistics, economic indicators worldwide."
        }, {
            name: "IMF Data",
            url: "https://data.imf.org",
            tier: "Elite",
            rating: 9.8,
            description: "International financial statistics, balance of payments, fiscal data."
        }, {
            name: "Trading Economics",
            url: "https://tradingeconomics.com",
            tier: "Elite",
            rating: 9.5,
            description: "Real-time economic indicators for 196 countries with forecasts."
        }, {
            name: "US Bureau of Economic Analysis (BEA)",
            url: "https://www.bea.gov",
            tier: "Elite",
            rating: 9.6,
            description: "GDP, consumer spending, trade statistics, regional economic data."
        }, {
            name: "US Bureau of Labor Statistics (BLS)",
            url: "https://www.bls.gov",
            tier: "Elite",
            rating: 9.6,
            description: "Employment, inflation (CPI/PPI), wage data, productivity metrics."
        }, {
            name: "Eurostat",
            url: "https://ec.europa.eu/eurostat",
            tier: "Elite",
            rating: 9.5,
            description: "Official EU statistics, economic indicators, demographic data."
        }, {
            name: "US Energy Information Administration (EIA)",
            url: "https://www.eia.gov",
            tier: "Elite",
            rating: 9.4,
            description: "Oil inventories, energy consumption, commodity price forecasts."
        }, {
            name: "DBnomics",
            url: "https://db.nomics.world",
            tier: "Elite",
            rating: 9.6,
            description: "Unified access to 50+ statistical providers (BIS, ECB, IMF, OECD)."
        }, {
            name: "UN Data",
            url: "http://data.un.org",
            tier: "Professional",
            rating: 9.1,
            description: "United Nations statistical databases, global development metrics."
        }, {
            name: "Economagic",
            url: "http://www.economagic.com",
            tier: "Professional",
            rating: 8.9,
            description: "400,000+ U.S. economic series, downloadable as Excel with historical depth."
        }, {
            name: "FreeLunch.com",
            url: "https://www.freelunch.com",
            tier: "Professional",
            rating: 8.7,
            description: "Curated free economic & financial datasets with quality curation."
        }, {
            name: "Office for National Statistics (UK ONS)",
            url: "https://www.ons.gov.uk",
            tier: "Elite",
            rating: 9.3,
            description: "Free UK macro and regional data with comprehensive statistical coverage."
        }, {
            name: "Data.gov.uk",
            url: "https://data.gov.uk",
            tier: "Professional",
            rating: 9.0,
            description: "Thousands of open government datasets with APIs and machine-readable formats."
        }, {
            name: "European Data Portal",
            url: "https://data.europa.eu",
            tier: "Elite",
            rating: 9.2,
            description: "Central access to 1.6M+ EU datasets across all sectors with API access."
        }, {
            name: "Census Bureau Economic Data",
            url: "https://www.census.gov",
            tier: "Elite",
            rating: 9.4,
            description: "Full access to national and regional economic data with demographic overlays."
        }, {
            name: "Bank of Canada",
            url: "https://www.bankofcanada.ca/rates/",
            tier: "Elite",
            rating: 9.4,
            description: "Canadian interest rates, monetary policy, economic indicators and forecasts."
        }, {
            name: "Reserve Bank of Australia",
            url: "https://www.rba.gov.au/statistics/",
            tier: "Elite",
            rating: 9.3,
            description: "Australian economic statistics, commodity currency insights, Asia-Pacific data."
        }, {
            name: "Swiss National Bank",
            url: "https://www.snb.ch/en/statistics",
            tier: "Elite",
            rating: 9.2,
            description: "Swiss franc data, banking statistics, financial stability metrics."
        }, {
            name: "Reserve Bank of India",
            url: "https://www.rbi.org.in/Scripts/Statistics.aspx",
            tier: "Professional",
            rating: 8.9,
            description: "Indian monetary statistics, emerging market insights, rupee analytics."
        }, {
            name: "People's Bank of China",
            url: "http://www.pbc.gov.cn/en/3688006/index.html",
            tier: "Elite",
            rating: 9.1,
            description: "Chinese monetary data, yuan statistics, world's second-largest economy insights."
        }, {
            name: "Federal Reserve Bank Regional Data",
            url: "https://www.federalreserve.gov/monetarypolicy/files/BeigeBook_20240117.pdf",
            tier: "Elite",
            rating: 9.4,
            description: "Regional economic conditions, Beige Book insights, district-level analysis."
        }, {
            name: "Financial Juice",
            url: "https://www.financialjuice.com/",
            tier: "Standard",
            rating: "8.5",
            description: "Independent financial news and market commentary providing unbiased analysis of global economic events and market trends."
        }, {
            name: "Econoday",
            url: "https://www.econoday.com/",
            tier: "Professional",
            rating: 9.0,
            description: "The source for the economic calendar used by Bloomberg, Dow Jones, and institutional traders."
        }]
    }, {
        name: "Options & Derivatives",
        iconPath: "M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z",
        avgRating: 9.3,
        sources: [{
            name: "CBOE",
            url: "https://www.cboe.com",
            tier: "Elite",
            rating: 9.9,
            description: "VIX data, options volume, volatility indices, market structure insights - the standard."
        }, {
            name: "OptionStrat",
            url: "https://optionstrat.com",
            tier: "Elite",
            rating: 9.5,
            description: "Advanced options strategy analyzer, P&L visualization, Greeks calculator."
        }, {
            name: "MarketChameleon",
            url: "https://marketchameleon.com",
            tier: "Elite",
            rating: 9.4,
            description: "Options flow analysis, unusual activity detection, implied volatility tools."
        }, {
            name: "ORATS",
            url: "https://www.orats.com",
            tier: "Elite",
            rating: 9.3,
            description: "Options research, backtesting, volatility analysis - institutional grade analytics."
        }, {
            name: "MarketVol",
            url: "https://marketvol.com",
            tier: "Professional",
            rating: 9.0,
            description: "Volatility surface analysis, term structure, options market insights."
        }, {
            name: "VolatilityDB",
            url: "https://volatilitydb.com",
            tier: "Professional",
            rating: 8.8,
            description: "Historical volatility data, implied vol surfaces, comprehensive options analytics."
        }, {
            name: "OptionMetrics Research",
            url: "https://optionmetrics.com",
            tier: "Elite",
            rating: 9.2,
            description: "Academic-grade options research, free summaries and volatility studies."
        }, {
            name: "VIX Central",
            url: "https://vixcentral.com",
            tier: "Elite",
            rating: 9.2,
            description: "VIX term structure, volatility analysis, futures contango/backwardation tracking."
        }, {
            name: "SKEW Index",
            url: "https://www.cboe.com/tradable_products/vix/",
            tier: "Elite",
            rating: 9.1,
            description: "Tail risk measurement, black swan probability, options skew analytics."
        }, {
            name: "Volatility Lab (NYU)",
            url: "https://vlab.stern.nyu.edu",
            tier: "Elite",
            rating: 9.3,
            description: "Academic volatility research, systemic risk measures, financial stability metrics."
        }, {
            name: "SpotGamma",
            url: "https://dashboard.spotgamma.com/trace",
            tier: "Elite",
            rating: 9.5,
            description: "Institutional options flow analytics, gamma exposure (GEX), and volatility levels."
        }]
    }, {
        name: "Crypto & Blockchain Analytics",
        iconPath: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V15C11 16.1 11.9 17 13 17V21H17C18.1 21 19 20.1 19 19V15H21C21.6 15 22 14.6 22 14V11C22 10.4 21.6 10 21 10V9Z",
        avgRating: 9.2,
        sources: [{
            name: "CoinGecko",
            url: "https://www.coingecko.com",
            tier: "Elite",
            rating: 9.8,
            description: "Comprehensive crypto data, DeFi protocols, market analysis with institutional API."
        }, {
            name: "CoinMarketCap",
            url: "https://coinmarketcap.com",
            tier: "Elite",
            rating: 9.6,
            description: "Market caps, trading volumes, crypto rankings, historical data with API access."
        }, {
            name: "Glassnode Studio",
            url: "https://studio.glassnode.com",
            tier: "Elite",
            rating: 9.7,
            description: "On-chain analytics, Bitcoin metrics, institutional-grade blockchain intelligence."
        }, {
            name: "CryptoQuant",
            url: "https://cryptoquant.com",
            tier: "Elite",
            rating: 9.5,
            description: "Exchange flows, whale movements, miner statistics, market indicators."
        }, {
            name: "DefiLlama",
            url: "https://defillama.com",
            tier: "Elite",
            rating: 9.6,
            description: "DeFi TVL tracking, yield farming data, protocol analytics with comprehensive coverage."
        }, {
            name: "Dune Analytics",
            url: "https://dune.com",
            tier: "Elite",
            rating: 9.8,
            description: "Custom blockchain queries, community dashboards, sophisticated on-chain insights."
        }, {
            name: "CoinGlass",
            url: "https://www.coinglass.com",
            tier: "Elite",
            rating: 9.4,
            description: "Futures data, liquidation maps, funding rates, derivatives analytics."
        }, {
            name: "Messari",
            url: "https://messari.io",
            tier: "Elite",
            rating: 9.3,
            description: "Crypto research, fundamental analysis, protocol metrics, institutional reports."
        }, {
            name: "Santiment",
            url: "https://santiment.net",
            tier: "Elite",
            rating: 9.1,
            description: "On-chain metrics, social sentiment, development activity tracking with AI insights."
        }, {
            name: "Laevitas",
            url: "https://laevitas.ch",
            tier: "Professional",
            rating: 9.0,
            description: "Crypto derivatives analytics, options data, institutional trading insights."
        }, {
            name: "TensorCharts",
            url: "https://tensorcharts.com",
            tier: "Professional",
            rating: 8.9,
            description: "Order book heatmaps, footprint charts, advanced crypto charting tools."
        }, {
            name: "TradingLite",
            url: "https://www.tradinglite.com",
            tier: "Professional",
            rating: 8.7,
            description: "Crypto market profile, volume analysis, institutional trading tools."
        }, {
            name: "CryptoCompare",
            url: "https://www.cryptocompare.com",
            tier: "Professional",
            rating: 8.8,
            description: "Market data API, price feeds, crypto news aggregation with analytics."
        }, {
            name: "Coinalyze",
            url: "https://coinalyze.net",
            tier: "Professional",
            rating: 8.6,
            description: "Futures analytics, open interest tracking, crypto derivatives comprehensive data."
        }, {
            name: "CoinAPI",
            url: "https://www.coinapi.io",
            tier: "Elite",
            rating: 9.1,
            description: "Professional crypto market data API with institutional-grade reliability."
        }, {
            name: "DeFiPulse",
            url: "https://defipulse.com",
            tier: "Elite",
            rating: 9.3,
            description: "DeFi protocol rankings, TVL tracking, yield farming analytics platform."
        }, {
            name: "Token Terminal",
            url: "https://tokenterminal.com",
            tier: "Elite",
            rating: 9.4,
            description: "Crypto fundamentals, revenue metrics, P/E ratios for blockchain protocols."
        }, {
            name: "Nansen",
            url: "https://www.nansen.ai",
            tier: "Elite",
            rating: 9.5,
            description: "On-chain analytics, wallet labeling, smart money tracking with AI insights."
        }, {
            name: "Chainalysis",
            url: "https://www.chainalysis.com",
            tier: "Elite",
            rating: 9.3,
            description: "Blockchain investigation, compliance analytics, institutional crypto intelligence."
        }, {
            name: "MobChart",
            url: "https://mobchart.com",
            tier: "Professional",
            rating: 8.5,
            description: "Crypto liquidity analysis, market making insights with depth analytics."
        }, {
            name: "CoinAnk",
            url: "https://coinank.com",
            tier: "Elite",
            rating: 9.2,
            description: "Cryptocurrency futures tracking, liquidation data, derivatives market intelligence."
        }, {
            name: "Bitcoin Wisdom",
            url: "https://bitcoinwisdom.io",
            tier: "Elite",
            rating: 9.1,
            description: "Real-time Bitcoin charts, market depth analysis, professional crypto trading tools."
        }, {
            name: "Cryptowatch",
            url: "https://cryptowatch.net",
            tier: "Elite",
            rating: 9.3,
            description: "Multi-exchange trading platform, advanced charting, institutional crypto analytics."
        }, {
            name: "Bubblemaps",
            url: "https://bubblemaps.io",
            tier: "Elite",
            rating: 9.0,
            description: "Token holder visualization, wallet clustering, on-chain relationship mapping."
        }, {
            name: "ArbitrageScanner",
            url: "https://arbitragescanner.io",
            tier: "Elite",
            rating: 8.9,
            description: "Cross-exchange arbitrage opportunities, price discrepancy alerts, trading automation."
        }, {
            name: "WhalePortal",
            url: "https://whaleportal.com",
            tier: "Elite",
            rating: 9.1,
            description: "Large transaction tracking, whale movement alerts, institutional crypto monitoring."
        }, {
            name: "Velo Chart",
            url: "https://velo.xyz/chart",
            tier: "Elite",
            rating: 9.0,
            description: "Advanced crypto charting with institutional-grade analytics and market insights."
        }, {
            name: "TRDR",
            url: "https://trdr.io",
            tier: "Professional",
            rating: 8.8,
            description: "Crypto portfolio tracking, P&L analytics, advanced trading performance metrics."
        }, {
            name: "Coindar",
            url: "https://coindar.org",
            tier: "Professional",
            rating: 8.7,
            description: "Crypto events calendar, ICO tracking, blockchain project milestone monitoring."
        }, {
            name: "Orion Terminal",
            url: "https://orionterminal.com",
            tier: "Elite",
            rating: 9.2,
            description: "Multi-exchange crypto terminal, advanced order types, institutional trading tools."
        }, {
            name: "InSilico Terminal",
            url: "https://insilicoterminal.com/",
            tier: "Elite",
            rating: "9.8",
            description: "AI-powered financial terminal providing sophisticated market analysis, algorithmic trading tools, and institutional-grade data feeds."
        }, {
            name: "The Block",
            url: "https://www.theblock.co/",
            tier: "Elite",
            rating: "9.4",
            description: "Premium blockchain and cryptocurrency news platform delivering institutional-quality research and market intelligence."
        }, {
            name: "TradeStream",
            url: "https://tradestream.xyz/",
            tier: "Professional",
            rating: "9.2",
            description: "Advanced trading analytics and real-time market data streaming platform for professional traders and institutional investors."
        }, {
            name: "CoinMarketMan",
            url: "https://coinmarketman.com/",
            tier: "Standard",
            rating: "8.7",
            description: "Comprehensive cryptocurrency market analysis, portfolio tracking, and digital asset research platform with real-time price data."
        }, {
            name: "CoinMarketCal",
            url: "https://coinmarketcal.com/",
            tier: "Professional",
            rating: 9.0,
            description: "The leading economic calendar for reliable cryptocurrency news, events, and partnerships."
        }, {
            name: "EigenPhi",
            url: "https://eigenphi.io/",
            tier: "Elite",
            rating: 9.4,
            description: "Deep DeFi analysis covering MEV (Maximal Extractable Value), liquidity, and on-chain arbitrage."
        }, {
            name: "DexBars",
            url: "https://dexbars.com/",
            tier: "Standard",
            rating: 8.5,
            description: "Real-time charts, history, and price action for tokens across various decentralized exchanges."
        }]
    }, {
        name: "Order Flow & Market Microstructure",
        iconPath: "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2M12 4.4L11.58 6.17L9.83 6.58L11.58 6.99L12 8.76L12.42 6.99L14.17 6.58L12.42 6.17L12 4.4Z",
        avgRating: 9.2,
        sources: [{
            name: "SqueezeMetrics",
            url: "https://squeezemetrics.com",
            tier: "Elite",
            rating: 9.6,
            description: "Dark pool activity, gamma exposure, market maker positioning analytics."
        }, {
            name: "FlowAlgo",
            url: "https://flowalgo.com",
            tier: "Elite",
            rating: 9.4,
            description: "Options flow, unusual activity alerts, dark pool prints detection."
        }, {
            name: "CheddarFlow",
            url: "https://cheddarflow.com",
            tier: "Elite",
            rating: 9.3,
            description: "Real-time options flow, block trades, institutional activity monitoring."
        }, {
            name: "Optionsonar",
            url: "https://optionsonar.com",
            tier: "Professional",
            rating: 9.0,
            description: "Options sweep detection, unusual volume analysis with alerts."
        }, {
            name: "FINRA ATS Transparency",
            url: "https://www.finra.org/filing-reporting/ats-transparency",
            tier: "Elite",
            rating: 9.5,
            description: "Official dark pool reporting, ATS volume statistics - regulatory source."
        }, {
            name: "Bookmap",
            url: "https://bookmap.com",
            tier: "Elite",
            rating: 9.2,
            description: "Order book visualization, market depth analysis, liquidity tracking platform."
        }, {
            name: "Exocharts",
            url: "https://exocharts.com",
            tier: "Professional",
            rating: 8.8,
            description: "Order flow analysis, DOM visualization, institutional footprint charts."
        }, {
            name: "DepthChart",
            url: "https://depthchart.io",
            tier: "Professional",
            rating: 8.6,
            description: "Real-time order book depth visualization for crypto markets."
        }, {
            name: "Tradytics",
            url: "https://tradytics.com/darkpool-market",
            tier: "Elite",
            rating: 9.3,
            description: "AI-driven trading toolkit visualizing dark pool prints, options flow, and social sentiment."
        }, {
            name: "StockGrid",
            url: "https://www.stockgrid.io/darkpools",
            tier: "Professional",
            rating: 9.1,
            description: "Clean visualization of dark pool activity, short interest data, and gamma exposure."
        }]
    }, {
        name: "Alternative Data & Satellites",
        iconPath: "M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3Z",
        avgRating: 9.1,
        sources: [{
            name: "Google Earth Engine",
            url: "https://earthengine.google.com",
            tier: "Elite",
            rating: 9.8,
            description: "Satellite imagery analysis, environmental data, economic indicators from space."
        }, {
            name: "NASA Earthdata",
            url: "https://earthdata.nasa.gov",
            tier: "Elite",
            rating: 9.7,
            description: "Climate data, agricultural monitoring, natural disaster economic impact tracking."
        }, {
            name: "Sentinel Hub",
            url: "https://www.sentinel-hub.com",
            tier: "Elite",
            rating: 9.5,
            description: "European Space Agency satellite data, land use analysis, crop monitoring."
        }, {
            name: "MarineTraffic",
            url: "https://www.marinetraffic.com",
            tier: "Elite",
            rating: 9.4,
            description: "Global vessel tracking, trade flow analysis, port congestion economic data."
        }, {
            name: "FlightRadar24",
            url: "https://www.flightradar24.com",
            tier: "Professional",
            rating: 9.2,
            description: "Aircraft tracking, aviation analytics, travel demand economic indicators."
        }, {
            name: "Global Fishing Watch",
            url: "https://globalfishingwatch.org",
            tier: "Professional",
            rating: 9.1,
            description: "Fishing vessel activity, maritime transparency, trade monitoring insights."
        }, {
            name: "OpenSky Network",
            url: "https://opensky-network.org",
            tier: "Professional",
            rating: 8.9,
            description: "Raw ADS-B aircraft data, aviation research database with API access."
        }, {
            name: "VesselFinder",
            url: "https://www.vesselfinder.com",
            tier: "Professional",
            rating: 8.7,
            description: "Ship positions, maritime intelligence, cargo tracking for trade analysis."
        }, {
            name: "TankerTrackers",
            url: "https://tankertrackers.com",
            tier: "Professional",
            rating: 8.8,
            description: "Oil tanker movements, crude flow analysis, energy logistics intelligence."
        }, {
            name: "AISHub",
            url: "https://www.aishub.net",
            tier: "Standard",
            rating: 8.4,
            description: "Community AIS vessel tracking data with collaborative ship intelligence."
        }, {
            name: "FleetMon",
            url: "https://www.fleetmon.com",
            tier: "Standard",
            rating: 8.3,
            description: "Ship tracking with limited free access, maritime traffic analytics."
        }, {
            name: "Orbital Insight",
            url: "https://orbitalinsight.com",
            tier: "Elite",
            rating: 9.3,
            description: "Satellite-based economic analytics, free sample data and research reports."
        }, {
            name: "SpaceKnow",
            url: "https://spaceknow.com",
            tier: "Professional",
            rating: 8.8,
            description: "Satellite-based industrial activity monitoring with sample economic indicators."
        }, {
            name: "YipitData Research",
            url: "https://www.yipitdata.com/resources",
            tier: "Elite",
            rating: 9.1,
            description: "Alternative data insights, consumer spending trends, research publications."
        }, {
            name: "Second Measure Blog",
            url: "https://secondmeasure.com/datapoints/",
            tier: "Elite",
            rating: 9.0,
            description: "Consumer spending & trend research, credit card analytics insights."
        }, {
            name: "Satellite Imagery Analytics",
            url: "https://www.planet.com/insights/",
            tier: "Professional",
            rating: 8.7,
            description: "Free sample satellite analytics, economic activity monitoring from space."
        }, {
            name: "KeepTrack.Space",
            url: "https://keeptrack.space/",
            tier: "Elite",
            rating: 9.1,
            description: "Satellite tracking, space situational awareness, orbital debris monitoring for economic impact."
        }]
    }, {
        name: "Location & Mobility Intelligence",
        iconPath: "M12 2C15.31 2 18 4.66 18 7.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6Z",
        avgRating: 9.0,
        sources: [{
            name: "SafeGraph",
            url: "https://www.safegraph.com",
            tier: "Elite",
            rating: 9.5,
            description: "POI data, foot traffic analytics, consumer behavior economic insights."
        }, {
            name: "Placer.ai",
            url: "https://www.placer.ai",
            tier: "Elite",
            rating: 9.4,
            description: "Location analytics, retail intelligence, demographic economic insights."
        }, {
            name: "Google COVID-19 Mobility",
            url: "https://www.google.com/covid19/mobility",
            tier: "Elite",
            rating: 9.3,
            description: "Movement trends, location analytics, economic activity indicators."
        }, {
            name: "Apple Mobility Trends",
            url: "https://covid19.apple.com/mobility",
            tier: "Professional",
            rating: 9.0,
            description: "Transportation requests, mobility patterns, urban economic analytics."
        }, {
            name: "Cuebiq",
            url: "https://www.cuebiq.com",
            tier: "Professional",
            rating: 8.9,
            description: "Location intelligence, consumer insights, privacy-compliant economic analytics."
        }, {
            name: "OpenStreetMap",
            url: "https://www.openstreetmap.org",
            tier: "Standard",
            rating: 8.5,
            description: "Geographic data for location-based financial analysis, POI mapping platform."
        }]
    }, {
        name: "News & Sentiment Intelligence",
        iconPath: "M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M18 11H6V13H18V11M18 7H6V9H18V7Z",
        avgRating: 8.9,
        sources: [{
            name: "Reuters Markets",
            url: "https://www.reuters.com/markets",
            tier: "Elite",
            rating: 9.8,
            description: "Institutional-grade financial news, real-time market coverage, global reach."
        }, {
            name: "Bloomberg",
            url: "https://www.bloomberg.com",
            tier: "Elite",
            rating: 9.8,
            description: "Global financial news, market analysis, economic reporting - industry standard."
        }, {
            name: "Financial Times",
            url: "https://www.ft.com",
            tier: "Elite",
            rating: 9.7,
            description: "Premium financial journalism, in-depth market analysis, global perspective."
        }, {
            name: "The Wall Street Journal Markets",
            url: "https://www.wsj.com/news/markets",
            tier: "Elite",
            rating: 9.6,
            description: "Premium business coverage, some free articles, global market analysis."
        }, {
            name: "The Economist",
            url: "https://www.economist.com/",
            tier: "Elite",
            rating: 9.5,
            description: "Global economic analysis, market intelligence, geopolitical impact assessment."
        }, {
            name: "Seeking Alpha",
            url: "https://seekingalpha.com",
            tier: "Professional",
            rating: 9.3,
            description: "Earnings analysis, stock research, investment insights with community input."
        }, {
            name: "TipRanks",
            url: "https://www.tipranks.com",
            tier: "Professional",
            rating: 9.2,
            description: "Analyst rankings, price targets, insider trading analysis with track records."
        }, {
            name: "StockTwits",
            url: "https://stocktwits.com",
            tier: "Professional",
            rating: 8.9,
            description: "Social sentiment analysis, retail investor sentiment tracking platform."
        }, {
            name: "Google Trends",
            url: "https://trends.google.com",
            tier: "Professional",
            rating: 9.1,
            description: "Search interest analysis, trend prediction, market sentiment indicators."
        }, {
            name: "Alternative.me Fear & Greed",
            url: "https://alternative.me/crypto/fear-and-greed-index/",
            tier: "Professional",
            rating: 8.7,
            description: "Crypto market sentiment index, behavioral finance indicators."
        }, {
            name: "MarketBeat",
            url: "https://www.marketbeat.com",
            tier: "Professional",
            rating: 8.8,
            description: "Analyst ratings, insider trades, earnings estimates aggregation platform."
        }, {
            name: "Benzinga",
            url: "https://www.benzinga.com",
            tier: "Professional",
            rating: 8.6,
            description: "Trading news, market scanners, real-time financial updates for active traders."
        }, {
            name: "CNBC Markets",
            url: "https://www.cnbc.com/markets/",
            tier: "Professional",
            rating: 9.0,
            description: "Real-time market news & analysis with institutional commentary."
        }, {
            name: "Nikkei Asia",
            url: "https://asia.nikkei.com",
            tier: "Elite",
            rating: 9.2,
            description: "Asia-Pacific markets, trade intelligence, geopolitical economic analysis."
        }, {
            name: "Forex Factory",
            url: "https://www.forexfactory.com/",
            tier: "Professional",
            rating: "9.1",
            description: "Leading forex news, economic calendar, and trading community platform providing comprehensive foreign exchange market insights."
        }, {
            name: "Google News Finance",
            url: "https://news.google.com",
            tier: "Standard",
            rating: 8.4,
            description: "Aggregated financial news with AI-powered relevance and real-time updates."
        }, {
            name: "NewsNow Markets",
            url: "https://www.newsnow.co.uk/h/Business+&+Finance/Markets",
            tier: "Standard",
            rating: 8.3,
            description: "Global headline aggregation with comprehensive market coverage."
        }, {
            name: "Reddit WallStreetBets",
            url: "https://www.reddit.com/r/wallstreetbets/",
            tier: "Standard",
            rating: 8.2,
            description: "Community trading sentiment, retail investor trends, social trading signals."
        }, {
            name: "Finviz News",
            url: "https://finviz.com/news.ashx",
            tier: "Professional",
            rating: 8.5,
            description: "Market-related news aggregation with chart integration."
        }, {
            name: "FinBrain",
            url: "https://finbrain.tech",
            tier: "Professional",
            rating: 8.6,
            description: "Stock sentiment & news analytics with AI-powered insights, free samples."
        }, {
            name: "Sentifi",
            url: "https://sentifi.com",
            tier: "Standard",
            rating: 8.1,
            description: "Market sentiment signals with delayed free access, social media analytics."
        }, {
            name: "Reddit r/Investing",
            url: "https://www.reddit.com/r/investing/",
            tier: "Standard",
            rating: 8.3,
            description: "Long-term investment discussions, institutional sentiment, community insights."
        }, {
            name: "Twitter FinTwit",
            url: "https://twitter.com/search?q=%24SPY",
            tier: "Standard",
            rating: 8.1,
            description: "Financial Twitter community, real-time market sentiment, professional traders."
        }]
    }, {
        name: "Regulatory & Filings",
        iconPath: "M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20Z",
        avgRating: 9.3,
        sources: [{
            name: "SEC EDGAR",
            url: "https://www.sec.gov/edgar.shtml",
            tier: "Elite",
            rating: 10.0,
            description: "Official company filings, 10-K/10-Q reports, insider trading (Form 4) - the source."
        }, {
            name: "OpenInsider",
            url: "http://openinsider.com",
            tier: "Elite",
            rating: 9.5,
            description: "Insider trading scanner, executive transaction analysis with detailed tracking."
        }, {
            name: "WhaleWisdom",
            url: "https://www.whalewisdom.com",
            tier: "Elite",
            rating: 9.4,
            description: "13F filings analysis, hedge fund holdings tracking with comprehensive analytics."
        }, {
            name: "QuiverQuant",
            url: "https://www.quiverquant.com",
            tier: "Elite",
            rating: 9.3,
            description: "Congressional trading, lobbying data, political finance analytics platform."
        }, {
            name: "OpenSecrets",
            url: "https://www.opensecrets.org",
            tier: "Professional",
            rating: 9.1,
            description: "Political donations, lobbying expenditures, campaign finance transparency data."
        }, {
            name: "Companies House UK",
            url: "https://find-and-update.company-information.service.gov.uk",
            tier: "Professional",
            rating: 8.9,
            description: "UK corporate filings, director information, financial statements access."
        }, {
            name: "SEDAR Canada",
            url: "https://www.sedar.com",
            tier: "Professional",
            rating: 8.8,
            description: "Canadian securities filings, public company disclosures database."
        }]
    }, {
        name: "Fixed Income & Interest Rates",
        iconPath: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M9 7H15L13.5 7.5C9.4 8.5 9.4 11.5 13.5 12.5L15 13H9V7Z",
        avgRating: 9.2,
        sources: [{
            name: "TreasuryDirect",
            url: "https://www.treasurydirect.gov",
            tier: "Elite",
            rating: 9.8,
            description: "US Treasury auction data, bond yields, government securities - official source."
        }, {
            name: "SOFR (NY Fed)",
            url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
            tier: "Elite",
            rating: 9.7,
            description: "Secured Overnight Financing Rate, repo market data - benchmark rate."
        }, {
            name: "ICE Indices",
            url: "https://www.theice.com",
            tier: "Elite",
            rating: 9.4,
            description: "Bond indices, credit spreads, fixed income benchmarks with global coverage."
        }, {
            name: "World Government Bonds",
            url: "https://www.worldgovernmentbonds.com",
            tier: "Elite",
            rating: 9.2,
            description: "Global sovereign yields, credit ratings, bond analytics with live updates."
        }, {
            name: "Yield Book (S&P)",
            url: "https://www.yieldbook.com",
            tier: "Professional",
            rating: 9.0,
            description: "Fixed income analytics, duration analysis, bond mathematics tools."
        }, {
            name: "Federal Reserve Press Releases",
            url: "https://www.federalreserve.gov/newsevents.htm",
            tier: "Elite",
            rating: 9.6,
            description: "Policy decisions, speeches, economic outlook directly from the Fed."
        }, {
            name: "Bond Buyer",
            url: "https://www.bondbuyer.com",
            tier: "Professional",
            rating: 8.9,
            description: "Municipal bond market news, issuance data, credit analysis for munis."
        }, {
            name: "SIFMA",
            url: "https://www.sifma.org",
            tier: "Professional",
            rating: 8.7,
            description: "Securities industry statistics, bond market data, regulatory insights."
        }, {
            name: "Investment Company Institute",
            url: "https://www.ici.org",
            tier: "Professional",
            rating: 8.6,
            description: "Mutual fund statistics, ETF data, investment company industry insights."
        }]
    }, {
        name: "Exchanges & Direct Sources",
        iconPath: "M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2H6M6 4H18V8H6V4M6 10H18V14H6V10M6 16H18V20H6V16Z",
        avgRating: 9.3,
        sources: [{
            name: "NYSE",
            url: "https://www.nyse.com",
            tier: "Elite",
            rating: 9.8,
            description: "Market statistics, trading halts, IPO calendar, official exchange data."
        }, {
            name: "NASDAQ",
            url: "https://www.nasdaq.com",
            tier: "Elite",
            rating: 9.8,
            description: "Listings database, market makers, real-time exchange statistics."
        }, {
            name: "CME Group",
            url: "https://www.cmegroup.com",
            tier: "Elite",
            rating: 9.6,
            description: "Futures market data, volume statistics, derivatives analytics platform."
        }, {
            name: "Binance",
            url: "https://www.binance.com",
            tier: "Elite",
            rating: 9.5,
            description: "Largest crypto exchange, spot/futures data, comprehensive API access."
        }, {
            name: "Coinbase",
            url: "https://www.coinbase.com",
            tier: "Elite",
            rating: 9.4,
            description: "Institutional crypto data, custody metrics, regulated trading volumes."
        }, {
            name: "LME (London Metal Exchange)",
            url: "https://www.lme.com",
            tier: "Elite",
            rating: 9.3,
            description: "Metal prices, warehouse stocks, industrial commodity data - global standard."
        }, {
            name: "Bitstamp",
            url: "https://www.bitstamp.net",
            tier: "Professional",
            rating: 9.0,
            description: "European crypto exchange, institutional trading data with transparency."
        }, {
            name: "Shanghai Stock Exchange",
            url: "http://english.sse.com.cn",
            tier: "Elite",
            rating: 9.2,
            description: "Chinese equity market data, A-share statistics, emerging market insights."
        }, {
            name: "Tokyo Stock Exchange",
            url: "https://www.jpx.co.jp/english/",
            tier: "Elite",
            rating: 9.1,
            description: "Japanese market data, Nikkei components, REIT information."
        }, {
            name: "London Stock Exchange",
            url: "https://www.londonstockexchange.com",
            tier: "Elite",
            rating: 9.2,
            description: "UK equity data, FTSE indices, European market statistics."
        }, {
            name: "Euronext",
            url: "https://www.euronext.com",
            tier: "Elite",
            rating: 9.0,
            description: "European exchange data, CAC 40, Amsterdam/Brussels/Paris markets."
        }, {
            name: "Deutsche Börse",
            url: "https://www.deutsche-boerse.com",
            tier: "Professional",
            rating: 8.9,
            description: "German market data, DAX components, Xetra trading statistics."
        }, {
            name: "Bombay Stock Exchange",
            url: "https://www.bseindia.com",
            tier: "Professional",
            rating: 8.8,
            description: "Indian equity market, Sensex data, emerging market comprehensive statistics."
        }, {
            name: "Hong Kong Exchange",
            url: "https://www.hkex.com.hk",
            tier: "Professional",
            rating: 8.9,
            description: "Hong Kong market data, Hang Seng components, China connect statistics."
        }, {
            name: "IG Group",
            url: "https://www.ig.com/uk",
            tier: "Professional",
            rating: 9.1,
            description: "World-leading provider of CFDs, spread betting, and forex with deep market access."
        }]
    }, {
        name: "Quantitative Research & Backtesting",
        iconPath: "M13 9V3.5L22 12L13 20.5V15C8 15 4 19 4 19S5 14 13 9Z",
        avgRating: 9.1,
        sources: [{
            name: "QuantConnect",
            url: "https://www.quantconnect.com",
            tier: "Elite",
            rating: 9.8,
            description: "Algorithmic trading platform, backtesting engine, institutional research environment."
        }, {
            name: "Portfolio Visualizer",
            url: "https://www.portfoliovisualizer.com",
            tier: "Elite",
            rating: 9.6,
            description: "Advanced portfolio analytics, factor analysis, comprehensive risk metrics."
        }, {
            name: "OpenBB Terminal",
            url: "https://openbb.co",
            tier: "Elite",
            rating: 9.5,
            description: "Open-source investment research platform, Bloomberg terminal alternative."
        }, {
            name: "Quantpedia",
            url: "https://quantpedia.com",
            tier: "Professional",
            rating: 9.2,
            description: "Academic trading strategies database, systematic factor research."
        }, {
            name: "Kaggle Financial Data",
            url: "https://www.kaggle.com/datasets?search=financial",
            tier: "Professional",
            rating: 9.1,
            description: "Machine learning datasets, competitions, research notebooks for finance."
        }, {
            name: "Alpha Architect",
            url: "https://alphaarchitect.com",
            tier: "Professional",
            rating: 8.9,
            description: "Quantitative research, factor investing, academic studies with practical application."
        }, {
            name: "Backtrader",
            url: "https://www.backtrader.com",
            tier: "Professional",
            rating: 8.8,
            description: "Open-source backtesting framework with comprehensive strategy testing."
        }, {
            name: "QuantRocket",
            url: "https://www.quantrocket.com",
            tier: "Elite",
            rating: 9.1,
            description: "Institutional quant research platform with free trial access."
        }]
    }, {
        name: "Academic & Research Institutions",
        iconPath: "M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z",
        avgRating: 9.4,
        sources: [{
            name: "NBER",
            url: "https://www.nber.org",
            tier: "Elite",
            rating: 9.9,
            description: "National Bureau of Economic Research - working papers, authoritative datasets."
        }, {
            name: "SSRN",
            url: "https://www.ssrn.com",
            tier: "Elite",
            rating: 9.7,
            description: "Social Science Research Network - preprints, working papers, cutting-edge research."
        }, {
            name: "BIS (Bank for International Settlements)",
            url: "https://www.bis.org",
            tier: "Elite",
            rating: 9.8,
            description: "Central bank research, global financial stability reports, policy insights."
        }, {
            name: "CFA Institute Research",
            url: "https://www.cfainstitute.org/research",
            tier: "Elite",
            rating: 9.4,
            description: "Investment research, professional standards, market analysis from industry leaders."
        }, {
            name: "Federal Reserve Research",
            url: "https://www.federalreserve.gov/econres.htm",
            tier: "Elite",
            rating: 9.6,
            description: "Fed working papers, economic research, monetary policy analysis."
        }, {
            name: "Wharton Research Data Services",
            url: "https://wrds-www.wharton.upenn.edu",
            tier: "Elite",
            rating: 9.3,
            description: "Academic financial databases, institutional research platform access."
        }, {
            name: "OECD Newsroom",
            url: "https://www.oecd.org/newsroom/",
            tier: "Elite",
            rating: 9.1,
            description: "Macro and policy research from leading economic organization."
        }, {
            name: "Peterson Institute",
            url: "https://www.piie.com",
            tier: "Elite",
            rating: 9.2,
            description: "International economics research, trade policy analysis, macro insights."
        }, {
            name: "Brookings Economic Studies",
            url: "https://www.brookings.edu/research-programs/economic-studies/",
            tier: "Elite",
            rating: 9.1,
            description: "Economic policy research, fiscal analysis, monetary policy insights."
        }, {
            name: "Council on Foreign Relations",
            url: "https://www.cfr.org/topics/economics",
            tier: "Elite",
            rating: 9.0,
            description: "Geopolitical economics, international finance, policy impact analysis."
        }, {
            name: "BlackRock Investment Institute",
            url: "https://www.blackrock.com/corporate/insights/blackrock-investment-institute",
            tier: "Elite",
            rating: 9.8,
            description: "Global investment insights, market outlook, institutional research from world's largest asset manager."
        }, {
            name: "Goldman Sachs Research",
            url: "https://www.goldmansachs.com/insights/",
            tier: "Elite",
            rating: 9.7,
            description: "Institutional research, market analysis, economic forecasts from top investment bank."
        }, {
            name: "JPMorgan Research",
            url: "https://www.jpmorgan.com/insights",
            tier: "Elite",
            rating: 9.6,
            description: "Global market insights, economic research, institutional investment analysis."
        }, {
            name: "Bridgewater Associates Research",
            url: "https://www.bridgewater.com/research-and-insights",
            tier: "Elite",
            rating: 9.8,
            description: "Macro economic insights from world's largest hedge fund, institutional perspectives."
        }, {
            name: "Renaissance Technologies",
            url: "https://www.rentec.com",
            tier: "Elite",
            rating: 9.5,
            description: "Quantitative hedge fund insights, algorithmic trading research, mathematical finance."
        }, {
            name: "Two Sigma Research",
            url: "https://www.twosigma.com/insights",
            tier: "Elite",
            rating: 9.4,
            description: "Data science approach to investing, machine learning in finance, quantitative research."
        }, {
            name: "DE Shaw Research",
            url: "https://www.deshaw.com/insights",
            tier: "Elite",
            rating: 9.3,
            description: "Quantitative investment strategies, computational finance, systematic trading research."
        }, {
            name: "AQR Capital Management",
            url: "https://www.aqr.com/Insights",
            tier: "Elite",
            rating: 9.5,
            description: "Factor investing research, systematic strategies, academic-level quantitative analysis."
        }, {
            name: "Citadel Research",
            url: "https://www.citadel.com/insights/",
            tier: "Elite",
            rating: 9.4,
            description: "Market making insights, high-frequency trading research, institutional market structure."
        }, {
            name: "Man Group Research",
            url: "https://www.man.com/insights",
            tier: "Elite",
            rating: 9.2,
            description: "Alternative investment research, hedge fund strategies, institutional asset management."
        }, {
            name: "Vanguard Investment Strategy Group",
            url: "https://institutional.vanguard.com/insights",
            tier: "Elite",
            rating: 9.3,
            description: "Long-term investment insights, index fund research, institutional portfolio management."
        }, {
            name: "Fidelity Institutional Research",
            url: "https://institutional.fidelity.com/insights",
            tier: "Elite",
            rating: 9.1,
            description: "Active management research, market insights, institutional investment solutions."
        }, {
            name: "State Street Global Advisors",
            url: "https://www.ssga.com/insights",
            tier: "Elite",
            rating: 9.0,
            description: "ETF research, ESG investing, institutional asset management insights."
        }, {
            name: "T. Rowe Price Insights",
            url: "https://www.troweprice.com/insights",
            tier: "Professional",
            rating: 8.9,
            description: "Active management research, global market analysis, institutional investment strategies."
        }, {
            name: "Northern Trust Research",
            url: "https://www.northerntrust.com/insights-research",
            tier: "Professional",
            rating: 8.8,
            description: "Wealth management research, fiduciary insights, institutional investment analysis."
        }]
    }, {
        name: "International Trade",
        iconPath: "M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z",
        avgRating: 9.1,
        sources: [{
            name: "Eurostat COMEXT",
            url: "https://ec.europa.eu/eurostat/web/international-trade-in-goods/data/focus-on-comext",
            tier: "Elite",
            rating: 9.3,
            description: "EU international trade statistics, detailed commodity flow data."
        }, {
            name: "UN Comtrade",
            url: "https://comtrade.un.org",
            tier: "Elite",
            rating: 9.2,
            description: "Global trade statistics, import/export data by country and commodity."
        }, {
            name: "Observatory of Economic Complexity (OEC)",
            url: "https://oec.world",
            tier: "Elite",
            rating: 9.4,
            description: "Trade visualization, economic complexity rankings, export diversification analysis."
        }, {
            name: "WITS (World Integrated Trade Solution)",
            url: "https://wits.worldbank.org",
            tier: "Elite",
            rating: 9.1,
            description: "World Bank trade database, tariff analysis, trade policy research."
        }, {
            name: "USDA FAS",
            url: "https://www.fas.usda.gov",
            tier: "Professional",
            rating: 8.9,
            description: "Agricultural trade data, commodity intelligence, global food market analysis."
        }, {
            name: "TradeMap",
            url: "https://www.trademap.org",
            tier: "Professional",
            rating: 8.8,
            description: "International trade statistics, market access conditions, competitive analysis."
        }, {
            name: "WTO Statistics",
            url: "https://www.wto.org/english/res_e/statis_e/statis_e.htm",
            tier: "Elite",
            rating: 9.0,
            description: "World trade statistics, merchandise/services trade, regional analysis."
        }]
    }, {
        name: "Specialized Sectors",
        iconPath: "M17 7H22V17H17V19C17 20.1 16.1 21 15 21H9C7.9 21 7 20.1 7 19V5C7 3.9 7.9 3 9 3H15C16.1 3 17 3.9 17 5V7Z",
        avgRating: 9.0,
        sources: [{
            name: "FAOSTAT",
            url: "https://www.fao.org/faostat",
            tier: "Professional",
            rating: 9.0,
            description: "Global agriculture data, commodity prices, food security economic metrics."
        }, {
            name: "RealtyTrac",
            url: "https://www.realtytrac.com",
            tier: "Professional",
            rating: 8.8,
            description: "Real estate market data, foreclosure statistics, property analytics platform."
        }, {
            name: "Zillow Research",
            url: "https://www.zillow.com/research/",
            tier: "Professional",
            rating: 8.9,
            description: "Housing market trends, rent data, real estate economics with predictive analytics."
        }, {
            name: "CFTC Commitments of Traders",
            url: "https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm",
            tier: "Elite",
            rating: 9.5,
            description: "Futures positioning data, commercial/speculative breakdown - regulatory gold standard."
        }, {
            name: "Treasury International Capital (TIC)",
            url: "https://home.treasury.gov/data/treasury-international-capital-tic-system",
            tier: "Elite",
            rating: 9.2,
            description: "Foreign holdings of US securities, capital flows data - institutional tracking."
        }, {
            name: "World Gold Council",
            url: "https://www.gold.org",
            tier: "Professional",
            rating: 8.9,
            description: "Gold demand statistics, central bank reserves, precious metals market intelligence."
        }, {
            name: "International Energy Agency (IEA)",
            url: "https://www.iea.org",
            tier: "Elite",
            rating: 9.3,
            description: "Energy statistics, oil market reports, renewable energy transition data."
        }, {
            name: "OPEC",
            url: "https://www.opec.org",
            tier: "Elite",
            rating: 9.1,
            description: "Oil production data, market reports, petroleum statistics from primary source."
        }, {
            name: "Baltic Exchange",
            url: "https://www.balticexchange.com",
            tier: "Professional",
            rating: 8.7,
            description: "Shipping rates, dry bulk indices, maritime freight economic indicators."
        }]
    }, {
        name: "Modern Financial Platforms",
        iconPath: "M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12",
        avgRating: 9.2,
        sources: [{
            name: "Morningstar",
            url: "https://www.morningstar.com",
            tier: "Elite",
            rating: 9.6,
            description: "Fund analysis, equity research, portfolio management tools with institutional depth."
        }, {
            name: "FactSet",
            url: "https://www.factset.com",
            tier: "Elite",
            rating: 9.7,
            description: "Integrated financial data, analytics, portfolio management - industry standard."
        }, {
            name: "Refinitiv (LSEG)",
            url: "https://www.refinitiv.com",
            tier: "Elite",
            rating: 9.6,
            description: "Real-time market data, news, trading platforms with global reach."
        }, {
            name: "S&P Capital IQ",
            url: "https://www.spglobal.com/marketintelligence",
            tier: "Elite",
            rating: 9.5,
            description: "Financial data, credit ratings, market intelligence platform."
        }, {
            name: "Atom Finance",
            url: "https://atom.finance",
            tier: "Professional",
            rating: 9.0,
            description: "Modern investment research platform, social investing insights with AI."
        }, {
            name: "Public.com",
            url: "https://public.com",
            tier: "Professional",
            rating: 8.8,
            description: "Social investing platform, real-time market data, community insights."
        }, {
            name: "Webull",
            url: "https://www.webull.com",
            tier: "Professional",
            rating: 8.9,
            description: "Advanced charting, paper trading, market analysis tools for active traders."
        }, {
            name: "TradingView Ideas",
            url: "https://www.tradingview.com/ideas/",
            tier: "Professional",
            rating: 9.1,
            description: "Community trading ideas, technical analysis, social trading intelligence."
        }]
    }, {
        name: "Credit & Risk Analytics",
        iconPath: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C14.9 11.6 15 11.8 15 12V16C15 16.6 14.6 17 14 17H10C9.4 17 9 16.6 9 16V12C9 11.4 9.4 11 10 11V10.5C10 8.6 11.6 7 12 7M12 8.2C11.2 8.2 10.8 8.7 10.8 10.5V11H13.2V10.5C13.2 8.7 12.8 8.2 12 8.2Z",
        avgRating: 9.3,
        sources: [{
            name: "Moody's Analytics",
            url: "https://www.moodysanalytics.com",
            tier: "Elite",
            rating: 9.5,
            description: "Credit risk models, economic scenarios, default probability institutional data."
        }, {
            name: "S&P Ratings",
            url: "https://www.standardandpoors.com",
            tier: "Elite",
            rating: 9.4,
            description: "Credit ratings, sovereign risk, corporate bond analysis - global standard."
        }, {
            name: "Fitch Ratings",
            url: "https://www.fitchratings.com",
            tier: "Elite",
            rating: 9.3,
            description: "Credit opinions, rating actions, default studies with comprehensive coverage."
        }, {
            name: "FDIC Bank Data",
            url: "https://www.fdic.gov/analysis/",
            tier: "Elite",
            rating: 9.2,
            description: "Banking statistics, deposit insurance data, financial institution profiles."
        }, {
            name: "OCC Bank Data",
            url: "https://www.occ.treas.gov",
            tier: "Professional",
            rating: 9.0,
            description: "National bank statistics, regulatory data, comprehensive banking metrics."
        }]
    }, {
        name: "ESG & Sustainability",
        iconPath: "M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3 16.75 4 17.25C7 14.5 11 11.5 17 8Z",
        avgRating: 9.1,
        sources: [{
            name: "Bloomberg ESG",
            url: "https://www.bloomberg.com/professional/solution/esg/",
            tier: "Elite",
            rating: 9.4,
            description: "ESG scores, sustainability metrics, climate risk comprehensive data."
        }, {
            name: "Sustainalytics",
            url: "https://www.sustainalytics.com",
            tier: "Elite",
            rating: 9.3,
            description: "ESG risk ratings, corporate sustainability analysis with global coverage."
        }, {
            name: "MSCI ESG",
            url: "https://www.msci.com/esg-investing",
            tier: "Elite",
            rating: 9.2,
            description: "ESG indices, climate metrics, sustainable investing data - industry benchmark."
        }, {
            name: "CDP (Carbon Disclosure Project)",
            url: "https://www.cdp.net",
            tier: "Professional",
            rating: 9.0,
            description: "Corporate climate data, environmental disclosures, carbon footprint tracking."
        }, {
            name: "Global Reporting Initiative",
            url: "https://www.globalreporting.org",
            tier: "Professional",
            rating: 8.8,
            description: "Sustainability reporting standards, ESG frameworks and guidelines."
        }]
    }, {
        name: "Developer Tools",
        iconPath: "M8 3C9.11 3 10 3.89 10 5S9.11 7 8 7 6 6.11 6 5 6.89 3 8 3M8 21C6.89 21 6 20.11 6 19S6.89 17 8 17 10 17.89 10 19 9.11 21 8 21M16 7C17.11 7 18 7.89 18 9S17.11 11 16 11 14 10.11 14 9 14.89 7 16 7M16 15C14.89 15 14 14.11 14 13S14.89 11 16 11 18 11.89 18 13 17.11 15 16 15M8 9C9.11 9 10 9.89 10 11S9.11 13 8 13 6 12.11 6 11 6.89 9 8 9Z",
        avgRating: 9.1,
        sources: [{
            name: "GitHub Finance",
            url: "https://github.com/topics/finance",
            tier: "Professional",
            rating: 9.2,
            description: "Open-source financial tools, trading algorithms, data analysis scripts repository."
        }, {
            name: "QuantLib",
            url: "https://www.quantlib.org",
            tier: "Elite",
            rating: 9.4,
            description: "Open-source quantitative finance library, derivatives pricing, risk management."
        }, {
            name: "Apache Superset",
            url: "https://superset.apache.org",
            tier: "Professional",
            rating: 8.9,
            description: "Data visualization platform for financial dashboards and analytics."
        }, {
            name: "Jupyter Financial Notebooks",
            url: "https://jupyter.org",
            tier: "Professional",
            rating: 9.1,
            description: "Interactive financial analysis, data science workflows, research environment."
        }, {
            name: "Python for Finance",
            url: "https://pypi.org/search/?q=finance",
            tier: "Professional",
            rating: 9.3,
            description: "Financial libraries: pandas, numpy, scipy, matplotlib for quantitative analysis."
        }, {
            name: "R Finance Task View",
            url: "https://cran.r-project.org/web/views/Finance.html",
            tier: "Professional",
            rating: 9.0,
            description: "R packages for empirical finance, econometrics, risk management analytics."
        }]
    }, {
        name: "Environmental Data APIs",
        iconPath: "M19 6.5C19 4.57 17.43 3 15.5 3C14.71 3 13.99 3.34 13.5 3.88L12 5.38L10.5 3.88C10.01 3.34 9.29 3 8.5 3C6.57 3 5 4.57 5 6.5C5 7.38 5.37 8.19 6 8.77L12 15L18 8.77C18.63 8.19 19 7.38 19 6.5Z",
        avgRating: 8.7,
        sources: [{
            name: "OpenWeatherMap",
            url: "https://openweathermap.org/api",
            tier: "Professional",
            rating: 8.7,
            description: "Weather data for agricultural commodities, energy trading insights with API."
        }, {
            name: "World Bank Climate API",
            url: "https://datahelpdesk.worldbank.org/knowledgebase/articles/902061",
            tier: "Professional",
            rating: 8.8,
            description: "Climate data APIs, environmental indicators, sustainability metrics platform."
        }, {
            name: "NASA POWER API",
            url: "https://power.larc.nasa.gov",
            tier: "Professional",
            rating: 8.6,
            description: "Solar irradiance, meteorological data for renewable energy economic analysis."
        }]
    }, {
        name: "Utilities & Reference",
        iconPath: "M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1.6 5.6 3.1L8.5 6L6 8.5L3.1 5.6C1.6 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 22.7L22.7 20C23 19.7 23 19.3 22.7 19Z",
        avgRating: 8.4,
        sources: [{
            name: "Wikipedia Finance",
            url: "https://en.wikipedia.org/wiki/Portal:Business",
            tier: "Standard",
            rating: 8.3,
            description: "Financial concepts, company information, economic definitions encyclopedia."
        }, {
            name: "Investopedia",
            url: "https://www.investopedia.com",
            tier: "Standard",
            rating: 8.7,
            description: "Financial education, trading tutorials, market explanations - learning resource."
        }, {
            name: "SEC Investor.gov",
            url: "https://www.investor.gov",
            tier: "Standard",
            rating: 8.4,
            description: "Investor education, fraud alerts, regulatory guidance from official source."
        }, {
            name: "Economics Network",
            url: "https://www.economicsnetwork.ac.uk",
            tier: "Standard",
            rating: 8.2,
            description: "Academic economics resources, datasets, teaching materials compilation."
        }, {
            name: "AlternativeData.org",
            url: "https://alternativedata.org",
            tier: "Professional",
            rating: 8.6,
            description: "Vendor directory, trial access, alternative data source discovery platform."
        }]
    }, {
        name: "AI & AI Agents",
        iconPath: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V15C11 16.1 11.9 17 13 17V21H17C18.1 21 19 20.1 19 19V15H21C21.6 15 22 14.6 22 14V11C22 10.4 21.6 10 21 10V9Z",
        avgRating: 9.2,
        sources: [{
            name: "OpenAI ChatGPT",
            url: "https://chat.openai.com",
            tier: "Elite",
            rating: 9.7,
            description: "Advanced conversational AI for financial analysis, market research, and investment insights."
        }, {
            name: "Claude AI (Anthropic)",
            url: "https://claude.ai",
            tier: "Elite",
            rating: 9.6,
            description: "Constitutional AI for financial research, risk analysis, and institutional-grade insights."
        }, {
            name: "Google Bard",
            url: "https://bard.google.com",
            tier: "Elite",
            rating: 9.3,
            description: "AI assistant with real-time data access for market analysis and financial research."
        }, {
            name: "Perplexity AI",
            url: "https://www.perplexity.ai",
            tier: "Elite",
            rating: 9.4,
            description: "Research-focused AI with real-time financial data and source citations."
        }, {
            name: "Bing Chat",
            url: "https://www.bing.com/chat",
            tier: "Professional",
            rating: 9.0,
            description: "Microsoft's AI with web access for current financial news and market analysis."
        }, {
            name: "Character.AI",
            url: "https://character.ai",
            tier: "Professional",
            rating: 8.8,
            description: "Specialized financial AI personas for trading, analysis, and market insights."
        }, {
            name: "Poe by Quora",
            url: "https://poe.com",
            tier: "Elite",
            rating: 9.2,
            description: "Multiple AI models access including Claude, GPT-4, for comprehensive financial analysis."
        }, {
            name: "Hugging Face Transformers",
            url: "https://huggingface.co/models?pipeline_tag=text-generation",
            tier: "Elite",
            rating: 9.1,
            description: "Open-source financial NLP models, sentiment analysis, and market prediction tools."
        }, {
            name: "Cohere",
            url: "https://cohere.ai",
            tier: "Elite",
            rating: 9.0,
            description: "Enterprise AI platform with financial text analysis and generation capabilities."
        }, {
            name: "Anthropic Claude API",
            url: "https://www.anthropic.com/api",
            tier: "Elite",
            rating: 9.3,
            description: "Constitutional AI API for building financial applications and analysis tools."
        }, {
            name: "OpenAI API",
            url: "https://platform.openai.com",
            tier: "Elite",
            rating: 9.5,
            description: "GPT-4 and other models for financial data analysis, trading algorithms, and research."
        }, {
            name: "Stability AI",
            url: "https://stability.ai",
            tier: "Professional",
            rating: 8.9,
            description: "AI models for financial document analysis, chart generation, and data visualization."
        }, {
            name: "Replicate",
            url: "https://replicate.com",
            tier: "Professional",
            rating: 8.7,
            description: "Cloud platform for running AI models on financial datasets and analysis."
        }, {
            name: "Pinecone Vector Database",
            url: "https://www.pinecone.io",
            tier: "Elite",
            rating: 9.0,
            description: "Vector database for financial AI applications, similarity search, and embeddings."
        }, {
            name: "LangChain",
            url: "https://langchain.com",
            tier: "Elite",
            rating: 9.2,
            description: "Framework for building AI applications with financial data sources and analysis."
        }, {
            name: "AutoGPT",
            url: "https://github.com/Significant-Gravitas/AutoGPT",
            tier: "Professional",
            rating: 8.8,
            description: "Autonomous AI agent for automated financial research and analysis tasks."
        }, {
            name: "AgentGPT",
            url: "https://agentgpt.reworkd.ai",
            tier: "Professional",
            rating: 8.6,
            description: "Browser-based autonomous AI agents for financial research and market analysis."
        }, {
            name: "Zapier AI",
            url: "https://zapier.com/ai",
            tier: "Professional",
            rating: 8.9,
            description: "AI automation for financial workflows, data processing, and report generation."
        }, {
            name: "Microsoft Copilot",
            url: "https://copilot.microsoft.com",
            tier: "Elite",
            rating: 9.1,
            description: "AI assistant integrated with Office suite for financial modeling and analysis."
        }, {
            name: "Google AI Studio",
            url: "https://aistudio.google.com",
            tier: "Elite",
            rating: 9.0,
            description: "Platform for building and deploying AI models for financial applications."
        }, {
            name: "Kiyotaka",
            url: "https://kiyotaka.ai/",
            tier: "Elite",
            rating: 9.6,
            description: "Autonomous AI agent specialized in high-frequency trading logic and crypto market operations."
        }, {
            name: "Z.ai Chat",
            url: "https://chat.z.ai/",
            tier: "Professional",
            rating: 8.9,
            description: "Advanced conversational AI interface designed for rapid information retrieval and synthesis."
        }, {
            name: "Abacus.AI",
            url: "https://abacus.ai/",
            tier: "Elite",
            rating: 9.4,
            description: "End-to-end AI platform for building and deploying custom deep learning models for finance."
        }, {
            name: "Blitzy",
            url: "https://blitzy.com/",
            tier: "Professional",
            rating: 9.0,
            description: "AI-driven software development platform that streamlines coding for fintech applications."
        }, {
            name: "Zed AI",
            url: "https://zed.dev/ai",
            tier: "Professional",
            rating: 9.2,
            description: "High-performance code editor with integrated AI, ideal for low-latency algo development."
        }, {
            name: "Warp AI",
            url: "https://www.warp.dev/warp-ai",
            tier: "Professional",
            rating: 9.1,
            description: "AI-integrated terminal command line, optimizing data science workflows and script execution."
        }]
    }]
};

// Application Logic
let mousePosition = {
    x: 0,
    y: 0
};
let scrollY = 0;
let searchTerm = '';
let selectedTier = 'all';
let selectedCategory = 'all';
let filteredData = mockData.categories;

// Particle system - exact copy from g.html
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = {
    x: null,
    y: null,
    radius: 150
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 5;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 5;
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 5;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 5;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function initParticles() {
    particles = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = 'rgba(173, 216, 230, 0.6)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = `rgba(107, 182, 255, ${opacityValue})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach(p => p.update());
    connectParticles();
}

// Loading screen functionality
function initializeLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');

        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }

        if (mainContent) {
            mainContent.style.opacity = '1';
        }
    }, 2800);
}

// Filter functionality
function filterData() {
    let filtered = mockData.categories;
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.map(category => {
            // Check if category name matches
            const categoryMatches = category.name.toLowerCase().includes(searchLower);

            // Filter sources by name only
            const matchingSources = category.sources.filter(source =>
                source.name.toLowerCase().includes(searchLower)
            );

            // If category matches, include all sources; otherwise only matching sources
            return {
                ...category,
                sources: categoryMatches ? category.sources : matchingSources
            };
        }).filter(category => category.sources.length > 0);
    }
    if (selectedTier !== 'all') {
        filtered = filtered.map(category => ({
            ...category,
            sources: category.sources.filter(source => source.tier === selectedTier)
        })).filter(category => category.sources.length > 0);
    }
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(category => category.name === selectedCategory);
    }
    filteredData = filtered;
    renderCategories();
}

// Render categories
function renderCategories() {
    const container = document.getElementById('categoriesContainer');

    if (filteredData.length === 0) {
        container.innerHTML = `<p style="text-align:center; font-size: 1.2rem; color: var(--glacier-ice);">No Sources Found Matching Your Criteria.</p>`;
        return;
    }

    container.innerHTML = filteredData.map((category, index) => `
        <div class="category-card glass-premium" style="animation-delay: ${index * 0.15}s">
            <div class="category-header">
                <div class="category-icon-wrapper">
                    <svg class="icon category-icon" viewBox="0 0 24 24">
                        <path d="${category.iconPath || 'M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.58 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3Z'}"/>
                    </svg>
                    <div class="icon-bg-glow"></div>
                    <div class="icon-ring"></div>
                </div>
                <div class="category-info">
                    <h2 class="category-title">${category.name}</h2>
                    <div class="category-meta">
                        <span class="meta-badge">
                            <svg class="icon" style="width: 1rem; height: 1rem;" viewBox="0 0 24 24">
                                <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.58 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3Z"/>
                            </svg>
                            <span>${category.sources?.length || 0} sources</span>
                            <div class="badge-shine"></div>
                        </span>
                        <span class="meta-badge elite">
                            <svg class="icon" style="width: 1rem; height: 1rem;" viewBox="0 0 24 24">
                                <path d="M5 16L3 5H1V3H4L6 14L7 19H19V17H8L7 15H20L22 11L20.5 8H7.1L6.2 4H9V2H5.27L5 16Z"/>
                            </svg>
                            <span>${category.sources?.filter(s => s.tier === 'Elite').length || 0} Elite</span>
                            <div class="badge-shine"></div>
                        </span>
                        <span class="meta-badge rating">
                            <svg class="icon" style="width: 1rem; height: 1rem;" viewBox="0 0 24 24">
                                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                            </svg>
                            <span>${category.avgRating || '9.0'}</span>
                            <div class="badge-shine"></div>
                        </span>
                    </div>
                </div>
            </div>

            <div class="sources-grid">
                ${(category.sources || []).map(source => `
                    <div class="source-card glass" onclick="window.open('${source.url}', '_blank')">
                        <div class="source-header">
                            <div class="source-info">
                                <h3 class="source-name">${source.name}</h3>
                                <p class="source-url">${source.url}</p>
                            </div>
                            <div class="source-badges">
                                <span class="tier-badge tier-${source.tier.toLowerCase()}">
                                    <svg class="icon" style="width: 1rem; height: 1rem;" viewBox="0 0 24 24">
                                        <path d="${getTierIconPath(source.tier)}"/>
                                    </svg>
                                    <span>${source.tier}</span>
                                </span>
                                <span class="rating-badge">
                                    <svg class="icon" style="width: 1rem; height: 1rem;" viewBox="0 0 24 24">
                                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                                    </svg>
                                    <span>${source.rating}</span>
                                </span>
                            </div>
                        </div>
                        <p class="source-description">${source.description}</p>
                        <a href="${source.url}" target="_blank" class="access-btn tier-${source.tier.toLowerCase()}" onclick="event.stopPropagation()">
                            <span class="btn-text">Access Platform</span>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function getTierIconPath(tier) {
    switch (tier) {
        case 'Elite':
            return "M5 16L3 5H1V3H4L6 14L7 19H19V17H8L7 15H20L22 11L20.5 8H7.1L6.2 4H9V2H5.27L5 16Z";
        case 'Professional':
            return "M20 6H16L14 4H10L8 6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6Z";
        default:
            return "M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z";
    }
}

// Scroll to categories function
function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeLoadingScreen();
    initParticles();
    animateParticles();
    renderCategories();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            filterData();
        });
    }

    // Filter buttons
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-tier]') || e.target.closest('[data-tier]')) {
            const button = e.target.matches('[data-tier]') ? e.target : e.target.closest('[data-tier]');

            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            selectedTier = button.dataset.tier;
            filterData();
        }
    });

    // Custom Select Dropdown functionality from g.html
    const selectWrapper = document.getElementById('categorySelectWrapper');
    const trigger = selectWrapper.querySelector('.custom-select-trigger');
    const optionsContainer = document.getElementById('categoryOptions');
    const selectedDisplay = document.getElementById('selectedCategory');

    const allCategoriesOption = `<div class="custom-option selected" data-value="all">All Categories</div>`;
    optionsContainer.innerHTML = allCategoriesOption + mockData.categories.map(cat =>
        `<div class="custom-option" data-value="${cat.name}">${cat.name}</div>`
    ).join('');

    trigger.addEventListener('click', () => {
        selectWrapper.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!selectWrapper.contains(e.target)) {
            selectWrapper.classList.remove('open');
        }
    });

    optionsContainer.querySelectorAll('.custom-option').forEach(option => {
        option.addEventListener('click', (e) => {
            optionsContainer.querySelector('.selected').classList.remove('selected');
            e.currentTarget.classList.add('selected');

            const value = e.currentTarget.dataset.value;
            selectedCategory = value;
            selectedDisplay.textContent = e.currentTarget.textContent;

            selectWrapper.classList.remove('open');
            filterData();
        });
    });
});
