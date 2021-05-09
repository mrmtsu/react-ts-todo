import { Button, IconButton } from "@chakra-ui/button"
import { SunIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input"
import { Flex, Stack } from "@chakra-ui/layout";
import { Table, TableCaption, Tbody, Td, Tr } from "@chakra-ui/table";
import { ChangeEvent, memo, useState, VFC } from "react"

export const Home: VFC = memo(() => {
  const [tasks, setTasks] = useState<Array<string>>([]);
const [currentValue, setCurrentValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setCurrentValue(e.target.value);

  const onClickAdd = () => {
    // const newTodos = [...tasks, currentValue];
    setTasks([...tasks, currentValue]);
    setCurrentValue('')
  };

  return (
    <>
      <Stack as="main">
        <Stack as="section" align="flex-end" mt={2}>
          <IconButton aria-label="ホワイトモード" icon={<SunIcon />} bg="gray.300" borderRadius="3xl" />
        </Stack>
        <Stack as="article" mt={5} align="center">
          <Flex>
            <Input placeholder="TODOを記入" focusBorderColor="teal.500" value={currentValue} onChange={onChangeValue}/>
            <Button colorScheme="teal" size="md" ml={4} borderRadius="lg" _hover={{ opacity: "0.8" }} onClick={onClickAdd}>追加</Button>
          </Flex>
          <Stack align="center" minHeight="3xs" bg="orange.50" w="50%" borderRadius="2xl" p={4}>
            <Table colorScheme="teal">
              <TableCaption placement="top">未完了TODOリスト</TableCaption>
              <Tbody>
                {tasks.map((task) => (
                  <Tr key={task}>
                    <Td>{task}</Td>
                    <Td isNumeric>完了</Td>
                    <Td isNumeric>削除</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
          <Stack align="center" minHeight="3xs" bg="teal.50" w="50%" borderRadius="2xl" p={4}>
            <Table colorScheme="gray">
              <TableCaption placement="top">完了TODOリスト</TableCaption>
              <Tbody>
                <Tr>
                  <Td>PHPの勉強</Td>
                  <Td isNumeric>戻す</Td>
                </Tr>
                <Tr>
                  <Td>Laravelの勉強</Td>
                  <Td isNumeric>戻す</Td>
                </Tr>
              </Tbody>
            </Table>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
});
