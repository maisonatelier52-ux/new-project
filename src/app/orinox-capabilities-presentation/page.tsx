import Image from "next/image";
import Link from "next/link";
import Home from "../page";
import Orinox from "@/components/Orinox";
import Upstream from "@/components/Upstream";
import Future from "@/components/Future";
import WhoWeAre from "@/components/WhoWeAre";
import ExplorationAndProduction from "@/components/ExplorationAndProduction";
import TransportationAndStorage from "@/components/TransportationAndStorage";
import CurrentCapabilities from "@/components/CurrentCapabilities";
import TransitionCapabilities from "@/components/TransitionCapabilities";
import CoreMidstream from "@/components/CoreMidstream";
import FurtherCapabilities from "@/components/FurtherCapabilities";
import Orinoxship from "@/components/Orinoxship";
import AddressingtheProblem from "@/components/AddressingtheProblem";
import CoreBusinessSnapshot from "@/components/CoreBusinessSnapshot";
import OrinoxPage from "@/components/OrinoxPage";
import orinox from '../../../public/data/orinox.json'
import WhyWeExcel from "@/components/WhyWeExcel";
import FitForPurpose from "@/components/FitForPurpose";
import TechStack from "@/components/TechStack";
import ExplorationServices from "@/components/ExplorationServices";
import AppraisalAndFieldEvaluation from "@/components/AppraisalAndFieldEvaluation";
import DevelopmentDrillingAndCompletion from "@/components/DevelopmentDrillingAndCompletion";
import ProductionOperationAndOptimization from "@/components/ProductionOperationAndOptimization";
import EnhancedOilRecovery from "@/components/EnhancedOilRecovery";
import GatheringAndTransportation from "@/components/GatheringAndTransportation";
import OilAndGasProcessing from "@/components/OilAndGasProcessing";
import StorageSolutions from "@/components/StorageSolutions";
import MarketingAndOfftake from "@/components/MarketingAndOfftake";
import KeyDifferentiators from "@/components/KeyDifferentiators";
import ModularityAndRapidDevelopment from "@/components/ModularityAndRapidDevelopment";
import IntegratedCrossSector from "@/components/IntegratedCrossSector";
import OrinoxCommitsToDeliver from "@/components/OrinoxCommitsToDeliver";
import WhatOrinoxProposes from "@/components/WhatOrinoxProposes";
import WhyOrinox from "@/components/WhyOrinox";
import AccountableGovernance from "@/components/AccountableGovernance";
import Company from "@/components/Company";
import OnshoreOffshore from "@/components/OnshoreOffshore";
import OrinoxWorking from "@/components/OrinoxWorking";
import OrinoxGlobalLocations from "@/components/OrinoxGlobalLocations";

export default function OrinoxHome() {
  return (
<>
 <Orinox/>
 <Upstream/>
 <Future/>
 <WhoWeAre/>
 <ExplorationAndProduction/>
 <TransportationAndStorage/>
 <CurrentCapabilities/>
 <TransitionCapabilities/>
 <CoreMidstream/>
 <FurtherCapabilities/>
 <Orinoxship/>
 <AddressingtheProblem/>
 <CoreBusinessSnapshot/>
  <OrinoxPage data={orinox[0]}/>
  <OrinoxPage data={orinox[1]}/>
  <OrinoxPage data={orinox[2]}/>
  <WhyWeExcel/>
  <FitForPurpose/>
  <TechStack/>
  <ExplorationServices/>
  <AppraisalAndFieldEvaluation/>
  <DevelopmentDrillingAndCompletion/>
  <ProductionOperationAndOptimization/>
  <EnhancedOilRecovery/>
  <GatheringAndTransportation/>
  <OilAndGasProcessing/>
  <StorageSolutions/>
  <MarketingAndOfftake/>

  <KeyDifferentiators/>
  <ModularityAndRapidDevelopment/>
  <IntegratedCrossSector/>
  <OrinoxCommitsToDeliver/>
  <WhatOrinoxProposes/>
  <WhyOrinox/>
  <AccountableGovernance/>
  <Company/>
  <OnshoreOffshore/>
  <OrinoxWorking/>
  <OrinoxGlobalLocations/>

 </>

  );
}
