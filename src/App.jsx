import {
  useDisclosure,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import "./App.css";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar className="bg-transparent flex items-center py-5">
        <NavbarBrand>
          <Link href="" className="text-2xl font-bold text-black">
            Ngecrud
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center" className="hidden sm:flex">
          <NavbarItem>
            <Link
              href=""
              className="text-base font-medium text-white opacity-80"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href=""
              className="text-base font-medium text-white opacity-80"
            >
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button
            as={Link}
            size="md"
            color="primary"
            variant="light"
            className="bg-black text-sm font-semibold text-white"
          >
            Github
          </Button>
        </NavbarContent>
      </Navbar>
      <section className="py-10 px-6">
        <div>
          <div className="flex justify-between">
            <div className="flex justify-start">
              <Input type="search" placeholder="Search..." />
            </div>
            <div>
              <Button
                onPress={onOpen}
                color="success"
                className="text-sm font-semibold text-white"
              >
                New Data
              </Button>

              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>Add New data</ModalHeader>
                      <ModalBody>
                        <Input type="text" placeholder="Data Name" />
                        <Input type="text" placeholder="Description" />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button
                          color="success"
                          onPress={onClose}
                          className="text-sm fonr-semibold text-white"
                        >
                          Add
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
          <div className="mt-10">
            <Table>
              <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Action</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>1</TableCell>
                  <TableCell>React JS</TableCell>
                  <TableCell>Frontend framework</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
