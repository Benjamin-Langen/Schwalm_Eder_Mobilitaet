var wms_layers = [];


        var lyr_HintergrundkarteOpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Hintergrundkarte (OpenStreetMap)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Differenz_1 = new ol.format.GeoJSON();
var features_Differenz_1 = format_Differenz_1.readFeatures(json_Differenz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Differenz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Differenz_1.addFeatures(features_Differenz_1);
var lyr_Differenz_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Differenz_1, 
                style: style_Differenz_1,
                popuplayertitle: 'Differenz',
                interactive: false,
                title: '<img src="styles/legend/Differenz_1.png" /> Differenz'
            });
var format_Gemeinden_2 = new ol.format.GeoJSON();
var features_Gemeinden_2 = format_Gemeinden_2.readFeatures(json_Gemeinden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinden_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinden_2.addFeatures(features_Gemeinden_2);
var lyr_Gemeinden_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gemeinden_2, 
                style: style_Gemeinden_2,
                popuplayertitle: 'Gemeinden',
                interactive: true,
                title: '<img src="styles/legend/Gemeinden_2.png" /> Gemeinden'
            });
var format_SchwalmEderKreis_3 = new ol.format.GeoJSON();
var features_SchwalmEderKreis_3 = format_SchwalmEderKreis_3.readFeatures(json_SchwalmEderKreis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchwalmEderKreis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchwalmEderKreis_3.addFeatures(features_SchwalmEderKreis_3);
var lyr_SchwalmEderKreis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchwalmEderKreis_3, 
                style: style_SchwalmEderKreis_3,
                popuplayertitle: 'Schwalm-Eder Kreis',
                interactive: false,
                title: '<img src="styles/legend/SchwalmEderKreis_3.png" /> Schwalm-Eder Kreis'
            });
var format_ohneKinder_4 = new ol.format.GeoJSON();
var features_ohneKinder_4 = format_ohneKinder_4.readFeatures(json_ohneKinder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ohneKinder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ohneKinder_4.addFeatures(features_ohneKinder_4);
var lyr_ohneKinder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ohneKinder_4, 
                style: style_ohneKinder_4,
                popuplayertitle: 'ohne Kinder',
                interactive: true,
    title: 'ohne Kinder<br />\
    <img src="styles/legend/ohneKinder_4_0.png" /> sehr gering (0 - 2)<br />\
    <img src="styles/legend/ohneKinder_4_1.png" /> gering (3 - 4)<br />\
    <img src="styles/legend/ohneKinder_4_2.png" /> mittel (5 - 6)<br />\
    <img src="styles/legend/ohneKinder_4_3.png" /> hoch (7 - 8)<br />\
    <img src="styles/legend/ohneKinder_4_4.png" /> sehr hoch (9 - 10)<br />' });
var format_mitKindern_5 = new ol.format.GeoJSON();
var features_mitKindern_5 = format_mitKindern_5.readFeatures(json_mitKindern_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mitKindern_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mitKindern_5.addFeatures(features_mitKindern_5);
var lyr_mitKindern_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mitKindern_5, 
                style: style_mitKindern_5,
                popuplayertitle: 'mit Kindern',
                interactive: true,
    title: 'mit Kindern<br />\
    <img src="styles/legend/mitKindern_5_0.png" /> sehr gering (0 - 2)<br />\
    <img src="styles/legend/mitKindern_5_1.png" /> gering (3 - 4)<br />\
    <img src="styles/legend/mitKindern_5_2.png" /> mittel (5 - 6)<br />\
    <img src="styles/legend/mitKindern_5_3.png" /> hoch (7 - 8)<br />\
    <img src="styles/legend/mitKindern_5_4.png" /> sehr hoch (9 - 10)<br />' });
var format_HaltestellendesV_6 = new ol.format.GeoJSON();
var features_HaltestellendesV_6 = format_HaltestellendesV_6.readFeatures(json_HaltestellendesV_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HaltestellendesV_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaltestellendesV_6.addFeatures(features_HaltestellendesV_6);
cluster_HaltestellendesV_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_HaltestellendesV_6
});
var lyr_HaltestellendesV_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HaltestellendesV_6, 
                style: style_HaltestellendesV_6,
                popuplayertitle: 'Haltestellen des ÖV',
                interactive: true,
    title: 'Haltestellen des ÖV<br />\
    <img src="styles/legend/HaltestellendesV_6_0.png" /> sehr schlecht (0 - 2)<br />\
    <img src="styles/legend/HaltestellendesV_6_1.png" /> eher schlecht (3 - 4)<br />\
    <img src="styles/legend/HaltestellendesV_6_2.png" /> mittelmäßig (5 - 6)<br />\
    <img src="styles/legend/HaltestellendesV_6_3.png" /> eher gut (7 - 8)<br />\
    <img src="styles/legend/HaltestellendesV_6_4.png" /> sehr gut (9 - 10)<br />' });
var group_MultimodalittsPotenzial = new ol.layer.Group({
                                layers: [lyr_ohneKinder_4,lyr_mitKindern_5,],
                                fold: 'open',
                                title: 'Multimodalitäts-Potenzial'});
var group_Grenzen = new ol.layer.Group({
                                layers: [lyr_Differenz_1,lyr_Gemeinden_2,lyr_SchwalmEderKreis_3,],
                                fold: 'open',
                                title: 'Grenzen'});

lyr_HintergrundkarteOpenStreetMap_0.setVisible(true);lyr_Differenz_1.setVisible(true);lyr_Gemeinden_2.setVisible(true);lyr_SchwalmEderKreis_3.setVisible(true);lyr_ohneKinder_4.setVisible(true);lyr_mitKindern_5.setVisible(true);lyr_HaltestellendesV_6.setVisible(true);
var layersList = [lyr_HintergrundkarteOpenStreetMap_0,group_Grenzen,group_MultimodalittsPotenzial,lyr_HaltestellendesV_6];
lyr_Differenz_1.set('fieldAliases', {'fid': 'fid', });
lyr_Gemeinden_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'OBJID': 'OBJID', 'BEGINN': 'BEGINN', 'ADE': 'ADE', 'GF': 'GF', 'BSG': 'BSG', 'ARS': 'ARS', 'AGS': 'AGS', 'SDV_ARS': 'SDV_ARS', 'GEN': 'GEN', 'BEZ': 'BEZ', 'IBZ': 'IBZ', 'BEM': 'BEM', 'NBD': 'NBD', 'SN_L': 'SN_L', 'SN_R': 'SN_R', 'SN_K': 'SN_K', 'SN_V1': 'SN_V1', 'SN_V2': 'SN_V2', 'SN_G': 'SN_G', 'FK_S3': 'FK_S3', 'NUTS': 'NUTS', 'ARS_0': 'ARS_0', 'AGS_0': 'AGS_0', 'WSK': 'WSK', 'DLM_ID': 'DLM_ID', 'Gemeindekennziffer': 'Gemeindekennziffer', 'test': 'test', 'test2': 'test2', 'Rentner': 'Rentner', 'Haushaltseinkommen': 'Haushaltseinkommen', 'Auspendler': 'Auspendler', 'BeschäftigteMitAkademischemAbschluss': 'BeschäftigteMitAkademischemAbschluss', 'Kennziffer': 'Kennziffer', 'Raumeinheit': 'Raumeinheit', 'Aggregat': 'Aggregat', 'Zentralörtlicher Status (differenziert)': 'Zentralörtlicher Status (differenziert)', 'Zentralörtlicher Status (zusammengefasst)': 'Zentralörtlicher Status (zusammengefasst)', 'Zentralörtlicher Status': 'Zentralörtlicher Status', 'RegioStaR 17 - Regionalstatistischer Raumtyp': 'RegioStaR 17 - Regionalstatistischer Raumtyp', 'Raumtyp nach Lage': 'Raumtyp nach Lage', 'Stadt-/Gemeindetyp': 'Stadt-/Gemeindetyp', 'Erreichbarkeit von Mittelzentren': 'Erreichbarkeit von Mittelzentren', 'Erreichbarkeit von Oberzentren': 'Erreichbarkeit von Oberzentren', 'umstiegsfrei_erreichbar_neu': 'umstiegsfrei_erreichbar_neu', 'Kreis_mit_0': 'Kreis_mit_0', 'Kreiskennziffer': 'Kreiskennziffer', 'PKW-BesitzquoteErwerbstaetige': 'PKW-BesitzquoteErwerbstaetige', 'Tourismus_Betten_Anzahl': 'Tourismus_Betten_Anzahl', 'Tourismus_Anzahl_Übernachtungen': 'Tourismus_Anzahl_Übernachtungen', 'EW_Gemeinde_sum': 'EW_Gemeinde_sum', 'Pendler_gesammelt': 'Pendler_gesammelt', 'Pendler_sum': 'Pendler_sum', 'Pendler_kein_Umstieg_Prozent': 'Pendler_kein_Umstieg_Prozent', 'Gemeinde:': 'Gemeinde:', 'Einwohnende:': 'Einwohnende:', });
lyr_SchwalmEderKreis_3.set('fieldAliases', {'fid': 'fid', 'OBJID': 'OBJID', 'BEGINN': 'BEGINN', 'ADE': 'ADE', 'GF': 'GF', 'BSG': 'BSG', 'ARS': 'ARS', 'AGS': 'AGS', 'SDV_ARS': 'SDV_ARS', 'GEN': 'GEN', 'BEZ': 'BEZ', 'IBZ': 'IBZ', 'BEM': 'BEM', 'NBD': 'NBD', 'SN_L': 'SN_L', 'SN_R': 'SN_R', 'SN_K': 'SN_K', 'SN_V1': 'SN_V1', 'SN_V2': 'SN_V2', 'SN_G': 'SN_G', 'FK_S3': 'FK_S3', 'NUTS': 'NUTS', 'ARS_0': 'ARS_0', 'AGS_0': 'AGS_0', 'WSK': 'WSK', 'DLM_ID': 'DLM_ID', });
lyr_ohneKinder_4.set('fieldAliases', {'fid': 'fid', 'Multimodalitätspotenzial ohne Kinder': 'Multimodalitätspotenzial ohne Kinder', });
lyr_mitKindern_5.set('fieldAliases', {'fid': 'fid', 'Multimodalitätspotenzial mit Kindern': 'Multimodalitätspotenzial mit Kindern', });
lyr_HaltestellendesV_6.set('fieldAliases', {'fid': 'fid', 'stop_id': 'stop_id', 'start_time_minutes': 'start_time_minutes', 'end_time_minutes': 'end_time_minutes', 'num_routes': 'num_routes', 'num_trips': 'num_trips', 'max_headway': 'max_headway', 'min_headway': 'min_headway', 'mean_headway': 'mean_headway', 'service_time_minutes': 'service_time_minutes', 'service_time': 'service_time', 'stop_name': 'stop_name', 'parent_station': 'parent_station', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'location_type': 'location_type', 'index_right': 'index_right', 'frequency_per_hour': 'frequency_per_hour', 'BewertugAnzahlLinienWerktags': 'BewertugAnzahlLinienWerktags', 'BewertungTaktung_Werktags': 'BewertungTaktung_Werktags', 'BewertungBedienzeit_Werktags': 'BewertungBedienzeit_Werktags', 'Bewertung_Headway_max_Werktags': 'Bewertung_Headway_max_Werktags', 'OPNV-Kennzahl_Werktags': 'OPNV-Kennzahl_Werktags', 'Haltestelle': 'Haltestelle', 'Linienanzahl': 'Linienanzahl', 'Taktung (in Minuten)': 'Taktung (in Minuten)', 'Bedienungzeitraum': 'Bedienungzeitraum', 'Bedienungslücken': 'Bedienungslücken', 'Bewertung Lienienanzahl': 'Bewertung Lienienanzahl', 'Bewertung Taktung': 'Bewertung Taktung', 'Bewertung Bedienungszeitraum': 'Bewertung Bedienungszeitraum', 'Bewertung Bedienungslücken': 'Bewertung Bedienungslücken', 'Gesamtbewertung der Haltestelle': 'Gesamtbewertung der Haltestelle', 'HLatestelle_einzeln': 'HLatestelle_einzeln', });
lyr_Differenz_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Gemeinden_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'OBJID': 'TextEdit', 'BEGINN': 'DateTime', 'ADE': 'Range', 'GF': 'Range', 'BSG': 'Range', 'ARS': 'TextEdit', 'AGS': 'TextEdit', 'SDV_ARS': 'TextEdit', 'GEN': 'TextEdit', 'BEZ': 'TextEdit', 'IBZ': 'Range', 'BEM': 'TextEdit', 'NBD': 'TextEdit', 'SN_L': 'TextEdit', 'SN_R': 'TextEdit', 'SN_K': 'TextEdit', 'SN_V1': 'TextEdit', 'SN_V2': 'TextEdit', 'SN_G': 'TextEdit', 'FK_S3': 'TextEdit', 'NUTS': 'TextEdit', 'ARS_0': 'TextEdit', 'AGS_0': 'TextEdit', 'WSK': 'DateTime', 'DLM_ID': 'TextEdit', 'Gemeindekennziffer': 'Range', 'test': 'TextEdit', 'test2': 'TextEdit', 'Rentner': 'TextEdit', 'Haushaltseinkommen': 'TextEdit', 'Auspendler': 'TextEdit', 'BeschäftigteMitAkademischemAbschluss': 'TextEdit', 'Kennziffer': 'TextEdit', 'Raumeinheit': 'TextEdit', 'Aggregat': 'TextEdit', 'Zentralörtlicher Status (differenziert)': 'TextEdit', 'Zentralörtlicher Status (zusammengefasst)': 'TextEdit', 'Zentralörtlicher Status': 'TextEdit', 'RegioStaR 17 - Regionalstatistischer Raumtyp': 'TextEdit', 'Raumtyp nach Lage': 'TextEdit', 'Stadt-/Gemeindetyp': 'TextEdit', 'Erreichbarkeit von Mittelzentren': 'TextEdit', 'Erreichbarkeit von Oberzentren': 'TextEdit', 'umstiegsfrei_erreichbar_neu': 'TextEdit', 'Kreis_mit_0': 'TextEdit', 'Kreiskennziffer': 'Range', 'PKW-BesitzquoteErwerbstaetige': 'TextEdit', 'Tourismus_Betten_Anzahl': 'Range', 'Tourismus_Anzahl_Übernachtungen': 'Range', 'EW_Gemeinde_sum': 'Range', 'Pendler_gesammelt': '', 'Pendler_sum': '', 'Pendler_kein_Umstieg_Prozent': '', 'Gemeinde:': '', 'Einwohnende:': '', });
lyr_SchwalmEderKreis_3.set('fieldImages', {'fid': 'TextEdit', 'OBJID': 'TextEdit', 'BEGINN': 'DateTime', 'ADE': 'Range', 'GF': 'Range', 'BSG': 'Range', 'ARS': 'TextEdit', 'AGS': 'TextEdit', 'SDV_ARS': 'TextEdit', 'GEN': 'TextEdit', 'BEZ': 'TextEdit', 'IBZ': 'Range', 'BEM': 'TextEdit', 'NBD': 'TextEdit', 'SN_L': 'TextEdit', 'SN_R': 'TextEdit', 'SN_K': 'TextEdit', 'SN_V1': 'TextEdit', 'SN_V2': 'TextEdit', 'SN_G': 'TextEdit', 'FK_S3': 'TextEdit', 'NUTS': 'TextEdit', 'ARS_0': 'TextEdit', 'AGS_0': 'TextEdit', 'WSK': 'DateTime', 'DLM_ID': 'TextEdit', });
lyr_ohneKinder_4.set('fieldImages', {'fid': 'TextEdit', 'Multimodalitätspotenzial ohne Kinder': 'Range', });
lyr_mitKindern_5.set('fieldImages', {'fid': 'TextEdit', 'Multimodalitätspotenzial mit Kindern': 'Range', });
lyr_HaltestellendesV_6.set('fieldImages', {'fid': 'TextEdit', 'stop_id': 'TextEdit', 'start_time_minutes': 'TextEdit', 'end_time_minutes': 'TextEdit', 'num_routes': 'TextEdit', 'num_trips': 'TextEdit', 'max_headway': 'TextEdit', 'min_headway': 'TextEdit', 'mean_headway': 'TextEdit', 'service_time_minutes': 'TextEdit', 'service_time': 'TextEdit', 'stop_name': 'TextEdit', 'parent_station': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'location_type': 'TextEdit', 'index_right': 'TextEdit', 'frequency_per_hour': 'TextEdit', 'BewertugAnzahlLinienWerktags': 'TextEdit', 'BewertungTaktung_Werktags': 'Range', 'BewertungBedienzeit_Werktags': 'Range', 'Bewertung_Headway_max_Werktags': 'Range', 'OPNV-Kennzahl_Werktags': 'Range', 'Haltestelle': '', 'Linienanzahl': '', 'Taktung (in Minuten)': '', 'Bedienungzeitraum': '', 'Bedienungslücken': '', 'Bewertung Lienienanzahl': '', 'Bewertung Taktung': '', 'Bewertung Bedienungszeitraum': '', 'Bewertung Bedienungslücken': '', 'Gesamtbewertung der Haltestelle': '', 'HLatestelle_einzeln': '', });
lyr_Differenz_1.set('fieldLabels', {'fid': 'no label', });
lyr_Gemeinden_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'OBJID': 'hidden field', 'BEGINN': 'hidden field', 'ADE': 'hidden field', 'GF': 'hidden field', 'BSG': 'hidden field', 'ARS': 'hidden field', 'AGS': 'hidden field', 'SDV_ARS': 'hidden field', 'GEN': 'hidden field', 'BEZ': 'hidden field', 'IBZ': 'hidden field', 'BEM': 'hidden field', 'NBD': 'hidden field', 'SN_L': 'hidden field', 'SN_R': 'hidden field', 'SN_K': 'hidden field', 'SN_V1': 'hidden field', 'SN_V2': 'hidden field', 'SN_G': 'hidden field', 'FK_S3': 'hidden field', 'NUTS': 'hidden field', 'ARS_0': 'hidden field', 'AGS_0': 'hidden field', 'WSK': 'hidden field', 'DLM_ID': 'hidden field', 'Gemeindekennziffer': 'hidden field', 'test': 'hidden field', 'test2': 'hidden field', 'Rentner': 'hidden field', 'Haushaltseinkommen': 'hidden field', 'Auspendler': 'hidden field', 'BeschäftigteMitAkademischemAbschluss': 'hidden field', 'Kennziffer': 'hidden field', 'Raumeinheit': 'hidden field', 'Aggregat': 'hidden field', 'Zentralörtlicher Status (differenziert)': 'hidden field', 'Zentralörtlicher Status (zusammengefasst)': 'hidden field', 'Zentralörtlicher Status': 'hidden field', 'RegioStaR 17 - Regionalstatistischer Raumtyp': 'hidden field', 'Raumtyp nach Lage': 'hidden field', 'Stadt-/Gemeindetyp': 'hidden field', 'Erreichbarkeit von Mittelzentren': 'hidden field', 'Erreichbarkeit von Oberzentren': 'hidden field', 'umstiegsfrei_erreichbar_neu': 'hidden field', 'Kreis_mit_0': 'hidden field', 'Kreiskennziffer': 'hidden field', 'PKW-BesitzquoteErwerbstaetige': 'hidden field', 'Tourismus_Betten_Anzahl': 'hidden field', 'Tourismus_Anzahl_Übernachtungen': 'hidden field', 'EW_Gemeinde_sum': 'hidden field', 'Pendler_gesammelt': 'hidden field', 'Pendler_sum': 'hidden field', 'Pendler_kein_Umstieg_Prozent': 'hidden field', 'Gemeinde:': 'inline label - always visible', 'Einwohnende:': 'inline label - always visible', });
lyr_SchwalmEderKreis_3.set('fieldLabels', {'fid': 'no label', 'OBJID': 'no label', 'BEGINN': 'no label', 'ADE': 'no label', 'GF': 'no label', 'BSG': 'no label', 'ARS': 'no label', 'AGS': 'no label', 'SDV_ARS': 'no label', 'GEN': 'inline label - always visible', 'BEZ': 'no label', 'IBZ': 'no label', 'BEM': 'no label', 'NBD': 'no label', 'SN_L': 'no label', 'SN_R': 'no label', 'SN_K': 'no label', 'SN_V1': 'no label', 'SN_V2': 'no label', 'SN_G': 'no label', 'FK_S3': 'no label', 'NUTS': 'no label', 'ARS_0': 'no label', 'AGS_0': 'no label', 'WSK': 'no label', 'DLM_ID': 'no label', });
lyr_ohneKinder_4.set('fieldLabels', {'fid': 'hidden field', 'Multimodalitätspotenzial ohne Kinder': 'inline label - always visible', });
lyr_mitKindern_5.set('fieldLabels', {'fid': 'hidden field', 'Multimodalitätspotenzial mit Kindern': 'inline label - always visible', });
lyr_HaltestellendesV_6.set('fieldLabels', {'fid': 'hidden field', 'stop_id': 'hidden field', 'start_time_minutes': 'hidden field', 'end_time_minutes': 'hidden field', 'num_routes': 'hidden field', 'num_trips': 'hidden field', 'max_headway': 'hidden field', 'min_headway': 'hidden field', 'mean_headway': 'hidden field', 'service_time_minutes': 'hidden field', 'service_time': 'hidden field', 'stop_name': 'hidden field', 'parent_station': 'hidden field', 'stop_lat': 'hidden field', 'stop_lon': 'hidden field', 'location_type': 'hidden field', 'index_right': 'hidden field', 'frequency_per_hour': 'hidden field', 'BewertugAnzahlLinienWerktags': 'hidden field', 'BewertungTaktung_Werktags': 'hidden field', 'BewertungBedienzeit_Werktags': 'hidden field', 'Bewertung_Headway_max_Werktags': 'hidden field', 'OPNV-Kennzahl_Werktags': 'hidden field', 'Haltestelle': 'header label - always visible', 'Linienanzahl': 'inline label - visible with data', 'Taktung (in Minuten)': 'inline label - visible with data', 'Bedienungzeitraum': 'inline label - visible with data', 'Bedienungslücken': 'inline label - visible with data', 'Bewertung Lienienanzahl': 'hidden field', 'Bewertung Taktung': 'hidden field', 'Bewertung Bedienungszeitraum': 'hidden field', 'Bewertung Bedienungslücken': 'hidden field', 'Gesamtbewertung der Haltestelle': 'inline label - visible with data', 'HLatestelle_einzeln': 'no label', });
lyr_HaltestellendesV_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});