/*
Copyright © 2025 k1tesurfen <>

*/
package main

import (
	"github.com/k1tesurfen/learn/cmd"
	"github.com/google/uuid"
)

func main() {
	test := uuid.Get()
	println(test)
	cmd.Execute()
}
