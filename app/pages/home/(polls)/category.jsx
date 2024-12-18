import { Box, Center, Flex, ScrollView, VStack } from "native-base";
import TabsMenuTwoItems from "../../../shared/Tabs/TabsMenuTwoItems";
import FilterBar from "./../../../shared/FilterBar/FilterBar";
import PollsCard from "../../../widgets/Cards/PollsCard";
import { useState } from "react";
import OrganizationCard from "../../../widgets/Cards/OrganizationCard";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { getUser } from "../../../processes/store/slices/postsSlice";
function Category() {
  const [state, setState] = useState(0);
  const router = useRouter();
  const handleOrganizationClick=(id)=>{
   
    router.navigate({pathname:"pages/organization-view", params:{pollId:id}}  );
  }

  const handlePollClick=(id)=>{
    router.navigate({pathname:"pages/home/(polls)/overview/pollOverview", params:{pollId:id}}  );
  }

  const organizationsList = useSelector(getUser).organizations



  const handleGetContent = (number) => {
    switch (number) {
      case 0:
        return (
          <VStack style={{ gap: 6 }}>
            <PollsCard type="variant3" buttonClickHandler={handlePollClick}/>
           
          </VStack>
        );

      case 1:
        return (
          <VStack style={{ gap: 6 }}>

            {
              organizationsList.map((item,index)=>(
                <OrganizationCard key={index} item={item} type="variant2" topic="Медицина" text={"Название организации"} handleCardClick={handleOrganizationClick}/>
              ))
            }

          
           
          </VStack>
        );
    }
  };

  const handleChange = (number) => {
    setState(number);
  };
  return (
    <VStack>
      <Box my="14px">
        <TabsMenuTwoItems
          label1={"Опросы"}
          label2={"Организации"}
          handleOnChange={handleChange}
          initValue={state}
        />
      </Box>
      <VStack style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Flex style={{ marginBottom: 10 }}>По категориям</Flex>
        <FilterBar />
      </VStack>

      <ScrollView style={{ height: 600, width: "100%" }}>
        <Center>{handleGetContent(state)}</Center>
      </ScrollView>
    </VStack>
  );
}

export default Category;
