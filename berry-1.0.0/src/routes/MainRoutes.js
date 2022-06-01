import React, {lazy} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import MainLayout from './../layout/MainLayout';


const DashboardDefault = lazy(() => import('../views/dashboard/Default'));

const TableBasic = lazy(() => import('../views/forms/tables/TableBasic'));
const TableDense = lazy(() => import('../views/forms/tables/TableDense'));

const UtilsTypography = lazy(() => import('../views/utilities/typography'));
const UtilsColor = lazy(() => import('../views/utilities/color'));
const UtilsShadow = lazy(() => import('../views/utilities/shadow'));
const UtilsMaterialIcons = lazy(() => import('../views/utilities/icons/MaterialIcons'));
const UtilsTablerIcons = lazy(() => import('../views/utilities/icons/TablerIcons'));

// bagian master -----------------------------------
const dataPeserta = lazy(() => import('../views/dataPeserta'));
const tambahPeserta = lazy(() => import('../views/tambahPeserta'));
const tambahPenguji = lazy(() => import('../views/tambahPenguji'));
const dataPenguji = lazy(() => import('../views/dataPenguji'));

// bagian fit & proper ---------------------------------
const pendaftaranFitAndProper = lazy(() => import('../views/pendaftaranFitAndProper'));
const pendaftaranWawancara = lazy(() => import('../views/pendaftaranWawancara'));
const penilaianFitAndProper = lazy(() => import('../views/penilaianFitAndProper'));
const penilaianWawancara = lazy(() => import('../views/penilaianWawancara'));

// bagian report -----------------------------------------------
const rekapNilaiFitAndProper = lazy(() => import('../views/rekapNilaiFitAndProper'));
const rekapManualFitAndProper = lazy(() => import('../views/rekapManualFitAndProper'));
const cetakNilaiFitAndProper = lazy(() => import('../views/cetakNilaiFitAndProper'));
const rekapNilaiWawancara = lazy(() => import('../views/rekapNilaiWawancara'));
const cetakNilaiWawancara = lazy(() => import('../views/cetakNilaiWawancara'));

// bagian pencarian
const pencarianFitAndProper = lazy(() => import('../views/pencarianFitAndProper'));

// bagian user
const administrasiUser = lazy(() => import('../views/administrasiUser'));

const SamplePage = lazy(() => import('../views/sample-page'));

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',

                '/tables/tbl-basic',
                '/tables/tbl-dense',

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',
                '/icons/tabler-icons',
                '/icons/material-icons',

                '/dataPeserta',
                '/tambahPeserta',
                '/tambahPenguji',
                '/dataPenguji',

                '/pendaftaranFitAndProper',
                '/pendaftaranWawancara',
                '/penilaianFitAndProper',
                '/penilaianWawancara',
                
                '/rekapNilaiFitAndProper',
                '/rekapManualFitAndProper',
                '/cetakNilaiFitAndProper',
                '/rekapNilaiWawancara',
                '/cetakNilaiWawancara',
                '/pencarianFitAndProper',
                '/administrasiUser',

                '/sample-page'
            ]}
        >
            <MainLayout showBreadcrumb={true}>
                <Switch location={location} key={location.pathname}>
                        <Route path="/dashboard/default" component={DashboardDefault} />

                        <Route path="/tables/tbl-basic" component={TableBasic} />
                        <Route path="/tables/tbl-dense" component={TableDense} />

                        <Route path="/utils/util-typography" component={UtilsTypography} />
                        <Route path="/utils/util-color" component={UtilsColor} />
                        <Route path="/utils/util-shadow" component={UtilsShadow} />
                        <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                        <Route path="/icons/material-icons" component={UtilsMaterialIcons} />

                        {/* data master ni boss ------------------------------------- */}
                        <Route path="/dataPeserta" component={dataPeserta}/>
                        <Route path="/tambahPeserta" component={tambahPeserta} />
                        <Route path="/tambahPenguji" component={tambahPenguji} />
                        <Route path="/dataPenguji" component={dataPenguji}/>

                        {/* data fit and proper ni boss --------------------------------- */}
                        <Route path="/pendaftaranFitAndProper" component={pendaftaranFitAndProper}/>
                        <Route path="/pendaftaranWawancara" component={pendaftaranWawancara}/>
                        <Route path="/penilaianFitAndProper" component={penilaianFitAndProper}/>
                        <Route path="/penilaianWawancara" component={penilaianWawancara}/>

                        {/* data report ni boss ---------------------------------------------- */}
                        <Route path="/rekapNilaiFitAndProper" component={rekapNilaiFitAndProper}/>
                        <Route path="/rekapManualFitAndProper" component={rekapManualFitAndProper}/>
                        <Route path="/cetakNilaiFitAndProper" component={cetakNilaiFitAndProper}/>
                        <Route path="/rekapNilaiWawancara" component={rekapNilaiWawancara}/>
                        <Route path="/cetakNilaiWawancara" component={cetakNilaiWawancara}/>

                        <Route path="/pencarianFitAndProper" component={pencarianFitAndProper}/>
                        <Route path="/administrasiUser" component={administrasiUser}/>

                        <Route path="/sample-page" component={SamplePage} />

                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
