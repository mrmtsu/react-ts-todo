import { Button, IconButton } from "@chakra-ui/button"
import { ArrowBackIcon, CheckIcon, DeleteIcon, SunIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input"
import { Flex, Stack } from "@chakra-ui/layout";
import { Table, TableCaption, Tbody, Td, Tr } from "@chakra-ui/table";
import { ChangeEvent, memo, useState, VFC } from "react"

export const Home: VFC = memo(() => {
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [completedTasks, setCompletedTasks] = useState<Array<string>>([]);
  const [currentValue, setCurrentValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setCurrentValue(e.target.value);

  const onClickAdd = () => {
    setTasks([...tasks, currentValue]);
    setCurrentValue('')
  };

  const onClickCompleteButton = (index: number) => {
    const newCompleteTodos = [...tasks];
    newCompleteTodos.splice(index, 1);

    const newCompletedTodos = [...completedTasks, tasks[index]];
    setTasks(newCompleteTodos);
    setCompletedTasks(newCompletedTodos);
  };

  const onClickDeleteButton = (index: number) => {
    const newCompleteTodos = [...tasks];
    newCompleteTodos.splice(index, 1);
    setTasks(newCompleteTodos);
  };

  const onClickReturnButton = (index: number) => {
    const returnCompletedTasks = [...completedTasks];
    returnCompletedTasks.splice(index, 1);

    const returnCompleteTodos = [...tasks, completedTasks[index]];
    setCompletedTasks(returnCompletedTasks);
    setTasks(returnCompleteTodos);
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
                {tasks.map((task, index) => (
                    <Tr key={task}>
                      <Td>{task}</Td>
                      <Td isNumeric>
                        <IconButton
                          aria-label="完了ボタン"
                          icon={<CheckIcon />}
                          size="sm" borderRadius="3xl"
                          _hover={{ bg: "teal.400", color: "white" }}
                          _focus={{ outline: "none" }}
                          mr={{ base: "1px", md: "2"}}
                          flex=""
                          onClick={() => onClickCompleteButton(index)}
                        />
                        <IconButton
                          aria-label="削除ボタン"
                          icon={<DeleteIcon />}
                          size="sm"
                          borderRadius="3xl"
                          _hover={{ bg: "red.400", color: "white" }}
                          _focus={{ outline: "none" }}
                          onClick={() => onClickDeleteButton(index)}
                        />
                      </Td>
                    </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
          <Stack align="center" minHeight="3xs" bg="teal.50" w="50%" borderRadius="2xl" p={4}>
            <Table colorScheme="gray">
              <TableCaption placement="top">完了TODOリスト</TableCaption>
              <Tbody>
                {completedTasks.map((completedTask, index) => (
                  <Tr key={completedTask}>
                    <Td>{completedTask}</Td>
                    <Td isNumeric>
                      <IconButton
                        aria-label="戻すボタン"
                        icon={<ArrowBackIcon />}
                        size="sm"
                        borderRadius="3xl"
                        _hover={{ bg: "teal.400", color: "white" }}
                        _focus={{ outline: "none" }}
                        onClick={() => onClickReturnButton(index)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
});
