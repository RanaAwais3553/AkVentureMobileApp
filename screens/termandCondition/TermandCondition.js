import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Image, SafeAreaView, Text, View } from 'react-native';

import AllStyle from "../../AllStyle";
import HeaderButton from '../../components/headerButton/HeaderButton'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler'

//import SocialMediaIcon from '../../components/socialMediaIcon/SocialMediaIcon'


const TermandCondition = props =>{
  return(
    <ScrollView>
    <SafeAreaView style={{flex:1}}>
    
  <View style={AllStyle.aboutMainClass}>
    {/* <View style={{flex:1}}>
    <Image source={require('../../assets/images/excursions/dubai-burj-khalifa-tour-600x433.jpg')}  style={AllStyle.aboutimage}/>
    </View> */}
    {/* <View style={{flex:1}}>
      <SocialMediaIcon/>
    </View> */}
    <View style={{}}>
      <Text style={[{fontSize:18,textAlign:'center'},AllStyle.Aboutheading]}>Term & Condition MIssing</Text>
    </View>
{/* 
    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>Last updated: April 15, 2021
Please read these terms and conditions carefully before using Our Service.</Text>
    </View>
    
    <View style={{}}>
      <Text style={[{fontSize:16,textAlign:'center'},AllStyle.Aboutheading]}>Interpretation and Definitions</Text>
    </View>
    
    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Interpretation</Text>
    </View>
     
    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Definitions</Text>
    </View>

    <View style={{}}>
      <Text style={AllStyle.Aboutdetail}>
      For the purposes of these Terms and Conditions:
        
        </Text>
    </View>
    
    
    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>1-Affiliate means an entity that controls is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.
</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>2-Country refers to: United Arab Emirates.
</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>3-Company (referred to as either "the Company," "We," "Us," or "Our" in this Agreement) refers to GROUP OF COMPANIES, DUABI.
</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>4-Device means any device that can access the Service, such as a computer, a cellphone, or a digital tablet.
</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>5-Service refers to the Website.</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>6-Third-party Social Media Service means any services or content (including data, information, products, or services) provided by a third party that may be displayed, included, or made available by the Service.
</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>7-Website refers to LBGLOBE, accessible from lbglobe.org</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>8-You mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Acknowledgment</Text>
    </View>


    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>These are the Terms and Conditions governing this Service's use and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the Service's use.
Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service.
By accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service.
You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the company's Privacy Policy. Our Privacy Policy describes Our policies and procedures on collecting, using, and disclosing your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
</Text>
    
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Links to Other Websites</Text>
    </View>
    
    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>Our Service may contain links to third-party websites or services that the Company is not owned or controlled.
The Company has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services you visit.
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Termination</Text>
    </View>



    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason, including without limitation, if You breach these Terms and Conditions.
Upon termination, Your right to use the Service will cease immediately.
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Limitation of Liability</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data, or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
Some states do not exclude implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>"AS IS" and "AS AVAILABLE" Disclaimer</Text>
    </View>


    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>The Service is provided to You "AS IS" and "AS AVAILABLE" and all faults and defects without any warranty. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, concerning the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on a consumer's applicable statutory rights, so some or all of the above exclusions and limitations may not apply to You. But in such a case, the exclusions and limitations outlined in this section shall be applied to the greatest extent enforceable under applicable law.
</Text>
    </View>


    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Governing Law</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Disputes Resolution</Text>
    </View>

    <View style={{margin:5}}>
      <Text style={AllStyle.Aboutdetail}>If You have any concern or dispute about the Service, You agree to try to resolve the dispute informally by contacting the Company.</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>For European Union (EU) Users</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>If You are a European Union consumer, you will benefit from any mandatory provisions of the country's law in which you are resident.
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>United States Legal Compliance</Text>
    </View>


    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:16,textAlign:'center'},AllStyle.Aboutheading]}>Severability and Waiver</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Severability</Text>
    </View>

    <View style={{margin:7}}>
      <Text style={AllStyle.Aboutdetail}>Suppose any provision of these Terms is held to be unenforceable or invalid. In that case, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law. The remaining provisions will continue in full force and effect.
      </Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Waiver</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall be the waiver of a breach constitute a waiver of any subsequent breach.</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Translation Interpretation</Text>
    </View>


    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>These Terms and Conditions may have been translated if We have made them available to You on our Service.
You agree that the original English text shall prevail in the case of a dispute.</Text>
    </View>


    <View style={{}}>
      <Text style={[{fontSize:14,textAlign:'center'},AllStyle.Aboutheading]}>Changes to These Terms and Conditions</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>At Our sole discretion, we reserve the right to modify or replace these Terms at any time. If a revision is a material, we will make reasonable efforts to provide at least 30 days of notice before any new terms. What constitutes a material change will be determined at Our sole discretion.
By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, please stop using the website and the Service in whole or in part.
</Text>
    </View>

    <View style={{}}>
      <Text style={[{fontSize:14, textAlign:'center'},AllStyle.Aboutheading]}>Contact Us</Text>
    </View>

    <View style={{margin:2}}>
      <Text style={AllStyle.Aboutdetail}>If you have any questions about these Terms and Conditions, You can contact us:
      {"\n"}• By email: info@lbglobe.org</Text>
    </View> */}

  </View>
  
  </SafeAreaView>
  </ScrollView>
);
};

TermandCondition.navigationOptions = navData => {
  
  return{

  headerTitle:'Term&Condition',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default TermandCondition;