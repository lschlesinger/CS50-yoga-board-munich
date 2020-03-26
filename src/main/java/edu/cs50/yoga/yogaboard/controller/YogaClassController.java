package edu.cs50.yoga.yogaboard.controller;

import edu.cs50.yoga.yogaboard.model.YogaClass;
import edu.cs50.yoga.yogaboard.service.YogaClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/yoga-class")
public class YogaClassController {

    @Autowired
    private YogaClassService yogaClassService;


    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<YogaClass> getClasses() {
        return yogaClassService.getClasses();
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public YogaClass createClass(@RequestBody YogaClass yogaClass) {
        return yogaClassService.createClass(yogaClass);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public YogaClass getClass(@PathVariable String id) {
        return yogaClassService.getSingleClass(id);
    }
}
