import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const navigation = [
  { name: "All", value: "" },
  { name: "Html", value: "html" },
  { name: "Css", value: "css" },
  { name: "Javascript", value: "javascript" },
  { name: "Vue", value: "vue" },
  { name: "React", value: "react" },
];

export default function CommandMenus(props: { selectType: any; }) {
  const { selectType } = props
  return (
    <>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {navigation?.map(({ name, value }) => (
              <CommandItem onSelect={()=>selectType(value)} key={value}>{name}</CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="others">
            <CommandItem>Frame About</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
