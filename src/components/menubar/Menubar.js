
const Menubar = () => {
    const categories = [
        {
            title: "כל הקטגוריות",
            category: [
                {
                    title: "לוחות אם",
                    category:[
                        {
                          title:"לוחות למעבדי Intal" ,
                            category:[
                                
                            ]  
                        },{
                            title: "לוחות למעבדי AMD",
                            category:[
                        
                            ]   
                        },{
                            title: "מעבד מובנה על הלוח",
                            category:[]
                        }
                    ]
                },{
                    title: "כרטיסי מסך",
                    category:[
                        {
                            title: "NVIDIA",
                            category:[

                            ]
                        },{
                            title: "AMD Radeon",
                            category:[

                            ]
                        }
                    ]
                },{
                    title: "מעבדים ופתרונות קירור",
                    category:[
                        {
                            title: "מעבדים INTAL",
                            category:[

                            ]
                        },{
                            title:"מעבדים AMD",
                            category:[

                            ]
                        },{
                            title:"פתרונות קירור אוויר",
                            category:[

                            ]
                        },{
                            title:"קירור נוזלי",
                            category:[

                            ]
                        },{
                            title:"משחה טרמית",
                            category:[]
                        }
                    ]
                },{
                    title:"זכרון",
                    category:[
                        {
                            title:"זכרון לנייח DIMM",
                            category:[

                            ]
                        },{
                            title:"זכרון לנייד SODIMM",
                            category:[

                            ]
                        }
                    ]
                },{
                    title:"אחסון",
                    category:[
                        {
                            title: "SSD - Solid State Drive",
                            category:[

                            ]
                        },{
                            title: "HDD פנימי",
                            category:[

                            ]
                        },{
                            title: "HDD חיצוני",
                            category:[

                            ]
                        },{
                            title: "SSD חיצוני",
                            category:[]
                        },{
                            title: "Disk on key - SD cards",
                            category:[

                            ]
                        },{
                            title: "כונן אופטי",
                            category:[

                            ]
                        },{
                            title:"קופסא חיצונית לHDD",
                            category:[]
                        },{
                            title:"אחסון רשת NAS",
                            category:[]
                        }
                    ]
                },{
                    title:"מארזים / מאוורים למארז/ ציוד עזר לבנית מחשב",
                    category:[
                        {
                            title:"Antec",
                            category:[]
                        },{
                            title: "Cooler Master",
                            category:[]
                        },{
                            title: "Corsair",
                            category:[]
                        },{
                            title:"Solid & Others",
                            category:[]
                        },{
                            title: "פנלים קדמיים ודלתות צד",
                            category:[]
                        },{
                            title: "מאוררים למארז",
                            category:[

                            ]
                        },{
                            title: "כבלים ומתאמים לבניית מחשב",
                            category:[]
                        },{
                            title:"מארזי RACKMOUNT וציוד נלווה",
                            category:[]
                        }
                    ]
                },{
                    title:"ספקי כוח",
                    category:[
                        {
                            title:"Antec",
                            category:[]
                        },{
                            title:"Aorus & Gigabyte",
                            category:[]
                        },{
                            title:"Cooler Master",
                            category:[]
                        },{
                            title:"Corsair",
                            category:[]
                        },{
                            title:"SFX - ספקי MINI ITX",
                            category:[]
                        },{
                            title:"ספקי כוח חברות שונות",
                            category:[]
                        }
                    ]
                },{
                    title:"מחשבים ניידים/ טאבלטים",
                    category:[
                        {
                            title:"מחשבים ניידים",
                            category:[

                            ]
                        },{
                            title:"הרחבות אחריות ניידים",
                            category:[]
                        },{
                            title:"תיקים",
                            category:[]
                        },{
                            title:"טאבלטים",
                            category:[

                            ]
                        },{
                            title:"תחנות עגינה",
                            category:[]
                        },{
                            title:"מטענים",
                            category:[]
                        }
                    ]
                },{
                    title:"מחשבים נייחים",
                    category:[
                        {
                            title:"בנה מחשב",
                            category:[]
                        },{
                            title:"מחשבים (ללא הרכבה)",
                            category:[]
                        },{
                            title:"באנדל מורכב",
                            category:[]
                        },{
                            title:"Mini PC",
                            category:[

                            ]
                        },{
                            title:"מחשב מותג",
                            category:[

                            ]
                        },{
                            title:"AIO",
                            category:[

                            ]
                        },{
                            title:"מחשבי גיימינג גרפיקה ועריכה",
                            category:[]
                        },{
                            title:"הרחבת אחריות למחשבי מותג",
                            category:[]
                        }
                    ]
                },{
                    title:"תוכנות",
                    category:[
                        {
                            title:"מערכות הפעלה",
                            category:[]
                        },{
                            title:"אופיס",
                            category:[]
                        },{
                            title:"אנטיוירוס",
                            category:[

                            ]
                        }
                    ]
                },{
                    title:"מסכי מחשב / טלוויזיות / מתקני תלייה",
                    category:[
                        {
                            title:"מסכי מחשב",
                            category:[

                            ]
                        },{
                            title:"טלוויזיות",
                            category:[

                            ]
                        },{
                            title:"מתקני תלייה",
                            category:[]
                        }
                    ]
                },{
                    title:"מקלדות ועכברים",
                    category:[
                        {
                            title:"מקלדות סטנדרטיות",
                            category:[]
                        },{
                            title:"מקלדות גיימינג",
                            category:[]
                        },{
                            title:"עכברים",
                            category:[

                            ]
                        },{
                            title:"סט מקלדת + עכבר",
                            category:[

                            ]
                        },{
                            title:"משטח לעכבר / משענת יד למקלדת",
                            category:[]
                        }
                    ]
                },{
                    title:"SOUND - ציוד קול",
                    category:[
                        {
                            title:"רמקולים",
                            category:[

                            ]
                        },{
                            title:"כרטיסי קול",
                            category:[]
                        },{
                            title:"מיקרופונים",
                            category:[]
                        },{
                            title:"אוזניות",
                            category:[]
                        },{
                            title:"ציוד נלווה",
                            category:[]
                        }
                    ]
                },{
                    title:"ציוד הקפי",
                    category:[
                        {
                            title:"מפצלי USB",
                            category:[]
                        },{
                            title:"מוצרי אבטחה",
                            category:[]
                        },{
                            title:"כבלים ומתאמים",
                            category:[

                            ]
                        },{
                            title:"ציוד נלווה לMINING",
                            category:[]
                        },{
                            title:"מצלמות אינטרנט",
                            category:[]
                        },{
                            title:"כרטיסי PCI וPCIE",
                            category:[]
                        },{
                            title:"משטח קירור למחשב נייד",
                            category:[]
                        },{
                            title:"משענות יד למקלדת",
                            category:[]
                        },{
                            title:"מצלמות דרך",
                            category:[]
                        },{
                            title:"שונות",
                            category:[]
                        }
                    ]
                },{
                    title:"ציוד רשת",
                    category:[
                        {
                            title:"אבטחת רשת FORTINET FORTIGATE",
                            category:[

                            ]
                        },{
                            title:"נתבים",
                            category:[]
                        },{
                            title:"סוויצ'ים",
                            category:[

                            ]
                        },{
                            title:"אקסס פוינט",
                            category:[]
                        },{
                            title:"כרטיסי רשת",
                            category:[]
                        },{
                            title:"מודם/נתב סלולרי",
                            category:[]
                        },{
                            title:"כבלי רשת",
                            category:[

                            ]
                        },{
                            title:"ארונות תקשורת",
                            category:[]
                        },{
                            title:"ראשים וקופסאות",
                            category:[

                            ]
                        },{
                            title:"כלי עבודה לציוד רשת",
                            category:[]
                        }
                    ]
                },{
                    title:"טלוויזיה במעגל סגור",
                    category:[
                        {
                            title:"AHD",
                            category:[

                            ]
                        },{
                            title:"IP",
                            category:[

                            ]
                        },{
                            title:"מצלמות אלחוטיות",
                            category:[]
                        },{
                            title:"ציוד עזר למצלמות ומכשירי הקלטה",
                            category:[]
                        }
                    ]
                },{
                    title:"אל פסק UPS",
                    category:[
                        {
                            title:"סוללות לאל פסק",
                            category:[]
                        },{
                            title:"אל פסק",
                            category:[]
                        }
                    ]
                },{
                    title:"שירותי מעבדה",
                    category:[]
                }
            ]
        },{
            title: "לוחות אם",
            category:[
                {
                    title:"לוחות למעבדי Intal" ,
                category:[
                        {
                            title:"LGA 1851 דור 15",
                            category:[
                                {
                                    title:"Z890",
                                    category:[]                
                                }
                            ]    
                        },{
                            title:"INTEL LGA1700 דור 12/13/14",
                            category:[
                                {
                                    title:"Z790",
                                    category:[]                
                                },{
                                    title:"B760",
                                    category:[]                
                                },{
                                    title:"Z690",
                                    category:[]                
                                },{
                                    title:"B660",
                                    category:[]                
                                },{
                                    title:"H610",
                                    category:[]                
                                }
                            ]        
                        },{
                            title:"INTEL LGA1200 דור 10/11",
                            category:[
                                {
                                    title:"H510",
                                    category:[]
                                },{
                                    title:"H410 GEN10",
                                    category:[]
                                }
                            ]        
                        }
                    ]
                },{
                    title: "לוחות למעבדי AMD",
                    category:[
                        {
                            title:"לוחות למעבדי AM5 AMD",
                            category:[]        
                        },{
                            title:"לוחות אם למעבדי AM4+ AMD",
                            category:[
                                {
                                    title:"A520",
                                    category:[]                
                                },{
                                    title:"B450",
                                    category:[]                
                                },{
                                    title:"X570/X570S",
                                    category:[]                
                                },{
                                    title:"B550",
                                    category:[]                
                                }
                            ]        
                        },{
                            title:"לוחות אם למעבדי Threadripper AMD",
                            category:[]        
                        }
                    ]   
                },{
                    title: "מעבד מובנה על הלוח",
                    category:[]
                }
            ]
        },{
            title: "כרטיסי מסך",
            category:[
                {
                    title: "NVIDIA",
                    category:[
                        {
                            title:"PALIT",
                            category:[]
                        },{
                            title:"Gigabyte/AORUS",
                            category:[]
                        },{
                            title:"Quadro",
                            category:[]
                        },{
                            title:"ASUS",
                            category:[]
                        },{
                            title:"MSI",
                            category:[]
                        }
                    ]
                },{
                    title: "AMD Radeon",
                    category:[
                        {
                            title:"Gigabyte",
                            category:[]
                        }
                    ]
                }
            ]
        },{
            title: "מעבדים ופתרונות קירור",
            category:[
                {
                    title: "מעבדים INTAL",
                    category:[
                        {
                            title: "Intel LGA1851 Gen 15",
                            category:[]
                        },{
                            title: "Intel LGA1700 Gen 14",
                            category:[]
                        },{
                            title: "Intel LGA1700 Gen 13",
                            category:[]
                        },{
                            title: "Intel LGA1700 Gen 12",
                            category:[]
                        },{
                            title: "Intel LGA1200 Gen 11",
                            category:[]
                        },{
                            title: "Intel LGA1200 Gen 10",
                            category:[]
                        },{
                            title: "INTEL LGA2066",
                            category:[]
                        }
                    ]
                },{
                    title:"מעבדים AMD",
                    category:[
                        {
                            title:"AMD AM5",
                            category:[
                                {
                                    title:"AMD ZEN5",
                                    category:[]
                                },{
                                    title:"AMD ZEN4",
                                    category:[]
                                }
                            ]
                        },{
                            title:"AMD AM4",
                            category:[]
                        },{
                            title:"AMD Ryzen Threadripper",
                            category:[]
                        }
                    ]
                },{
                    title:"פתרונות קירור אוויר",
                    category:[
                        {
                            title:"Cooler Master",
                            category:[]
                        },{
                            title:"ANTEC",
                            category:[]
                        },{
                            title:"INTEL",
                            category:[]
                        },{
                            title:"Corsair",
                            category:[]
                        },{
                            title:"NOCTUA",
                            category:[]
                        },{
                            title:"DEEPCOOL",
                            category:[]
                        }
                    ]
                },{
                    title:"קירור נוזלי",
                    category:[
                        {
                            title:"Cooler Master",
                            category:[]
                        },{
                            title:"Antec",
                            category:[]
                        },{
                            title:"Corsair",
                            category:[]
                        },{
                            title:"Gigabyte Aorus",
                            category:[]
                        }
                    ]
                },{
                    title:"משחה טרמית",
                    category:[]
                }
            ]
        },{
            title:"זכרון",
            category:[
                {
                    title:"זכרון לנייח DIMM",
                    category:[
                        {
                            title:"DDR5",
                            category:[
                                {
                                    title:"KINGSTON",
                                    category:[]
                                },{
                                    title:"NETAC",
                                    category:[]
                                },{
                                    title:"G.SKILL",
                                    category:[]
                                },{
                                    title:"CRUCIAL",
                                    category:[]
                                },{
                                    title:"CORSAIR",
                                    category:[]
                                },{
                                    title:"Transcend",
                                    category:[]
                                }
                            ]
                        },{
                            title:"DDR4",
                            category:[
                                {
                                    title:"CRUCIAL",
                                    category:[]
                                },{
                                    title:"KINGSTON",
                                    category:[]
                                },{
                                    title:"Netac",
                                    category:[]
                                },{
                                    title:"G.SKILL",
                                    category:[
                                        {
                                            title:"8GB",
                                            category:[]
                                        },{
                                            title:"16GB",
                                            category:[]
                                        },{
                                            title:"32GB",
                                            category:[]
                                        },{
                                            title:"64GB",
                                            category:[]
                                        },{
                                            title:"4GB",
                                            category:[]
                                        }
                                    ]
                                },{
                                    title:"CORSAIR",
                                    category:[
                                        {
                                            title:"8GB",
                                            category:[]
                                        },{
                                            title:"16GB",
                                            category:[]
                                        },{
                                            title:"32GB",
                                            category:[]
                                        },{
                                            title:"64GB",
                                            category:[]
                                        },{
                                            title:"128GB",
                                            category:[]
                                        }
                                    ]
                                }
                            ]
                        },{
                            title:"DDR3",
                            category:[]
                        }
                    ]
                },{
                    title:"זכרון לנייד SODIMM",
                    category:[
                        {
                            title:"DDR5",
                            category:[]
                        },{
                            title:"DDR4",
                            category:[
                                {
                                    title:"KINGSTON",
                                    category:[]
                                },{
                                    title:"CRUCIAL",
                                    category:[]
                                },{
                                    title:"CORSAIR",
                                    category:[]
                                },{
                                    title:"G.SKILL",
                                    category:[]
                                },{
                                    title:"SAMSUNG",
                                    category:[]
                                },{
                                    title:"LEXAR",
                                    category:[]
                                }
                            ]
                        },{
                            title:"DDR3",
                            category:[]
                        }
                    ]
                }
            ]
        },{
            title:"אחסון",
            category:[
                {
                    title: "SSD - Solid State Drive",
                    category:[
                        {
                            title:"NVME GEN5",
                            category:[]
                        },{
                            title:"NVME GEN4",
                            category:[]
                        },{
                            title:"NVME GEN3",
                            category:[]
                        },{
                            title:"SSD sata 3",
                            category:[]
                        }
                    ]
                },{
                    title: "HDD פנימי",
                    category:[
                        {
                            title:"HDD 3.5\" לנייח",
                            category:[
                                {
                                    title:"Western Digital / HGST",
                                    category:[]
                                },{
                                    title:"Toshiba",
                                    category:[]
                                },{
                                    title:"Seagate",
                                    category:[]
                                }
                            ]
                        },{
                            title:"HDD 2.5\" לנייד",
                            category:[
                                {
                                    title:"HGST by WD",
                                    category:[]
                                },{
                                    title:"TOSHIBA",
                                    category:[]
                                },{
                                    title:"Western Digital",
                                    category:[]
                                },{
                                    title:"SEAGATE",
                                    category:[]
                                }
                            ]
                        }
                    ]
                },{
                    title: "HDD חיצוני",
                    category:[
                        {
                            title:"3.5",
                            category:[
                                {
                                    title:"SEAGATE",
                                    category:[]
                                },{
                                    title:"Western Digital",
                                    category:[]
                                }
                            ]
                        },{
                            title:"2.5",
                            category:[
                                {
                                    title:"MAXTOR/SEAGATE",
                                    category:[]
                                },{
                                    title:"Western Digital",
                                    category:[]
                                },{
                                    title:"NETAC",
                                    category:[]
                                },{
                                    title:"toshiba",
                                    category:[]
                                }
                            ]
                        }
                    ]
                },{
                    title: "SSD חיצוני",
                    category:[]
                },{
                    title: "Disk on key - SD cards",
                    category:[
                        {
                            title:"Disk On Key",
                            category:[
                                {
                                    title:"Netac",
                                    category:[]
                                },{
                                    title:"Kingston",
                                    category:[]
                                },{
                                    title:"SANDISK",
                                    category:[]
                                }
                            ]
                        },{
                            title:"MICRO SD",
                            category:[
                                {
                                    title:"SanDisk",
                                    category:[]
                                },{
                                    title:"kingston",
                                    category:[]
                                },{
                                    title:"Netac",
                                    category:[]
                                }
                            ]
                        }
                    ]
                },{
                    title: "כונן אופטי",
                    category:[
                        {
                            title:"פנימי",
                            category:[]
                        },{
                            title:"חיצוני",
                            category:[]
                        }
                    ]
                },{
                    title:"קופסא חיצונית לHDD",
                    category:[]
                },{
                    title:"אחסון רשת NAS",
                    category:[]
                }
            ]
        },{
            title:"מארזים / מאוורים למארז/ ציוד עזר לבנית מחשב",
            category:[
                {
                    title:"Antec",
                    category:[]
                },{
                    title: "Cooler Master",
                    category:[]
                },{
                    title: "Corsair",
                    category:[]
                },{
                    title:"Solid & Others",
                    category:[]
                },{
                    title: "פנלים קדמיים ודלתות צד",
                    category:[]
                },{
                    title: "מאוררים למארז",
                    category:[
                        {
                            title:"Arctic Cooling",
                            category:[]
                        },{
                            title:"Antec",
                            category:[]
                        },{
                            title:"Corsair",
                            category:[]
                        },{
                            title:"Generic",
                            category:[]
                        },{
                            title:"Cooler Master",
                            category:[]
                        }
                    ]
                },{
                    title: "כבלים ומתאמים לבניית מחשב",
                    category:[]
                },{
                    title:"מארזי RACKMOUNT וציוד נלווה",
                    category:[]
                }
            ]
        }
    ]
    return (
        <div>
        
    </div>
  )
}

export default Menubar