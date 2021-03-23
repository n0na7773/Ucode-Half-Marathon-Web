<?php

function get_anonymous($name, $alias, $affiliation) {
    return new class($name, $alias, $affiliation) {
        private $name, $alias, $affiliation;

        public function __construct(string $name, string $alias, string $affiliation) {
            $this->name = $name;
            $this->alias = $alias;
            $this->affiliation = $affiliation;
        }

        public function setName(string $name) {
            $this->name = $name;
        }
        public function getName() {
            return $this->name;
        }
        public function setAlias(string $alias) {
            $this->alias = $alias;
        }
        public function getAlias() {
            return $this->alias;
        }
        public function setAffiliation(string $affiliation) {
            $this->affiliation = $affiliation;
        }
        public function getAffiliation() {
            return $this->affiliation;
        }
    };
}
/*require_once(__DIR__ . "/Anonymous.php");
$mandarin = get_anonymous("Unknown", "Mandarin", "Ten Rings");
print(implode("\n", array("name" => $mandarin->getName(),
    "alias" => $mandarin->getAlias(), "affiliation" => $mandarin->getAffiliation())));*/
?>